import { cookies, headers } from "next/headers";

export const GITHUB_PROVIDER = "github";
export const STATE_COOKIE = "decap_oauth_state";

export function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export async function getRequestOrigin() {
  const headerStore = await headers();
  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");
  const protocol = headerStore.get("x-forwarded-proto") ?? "https";

  if (!host) {
    return getRequiredEnv("NEXT_PUBLIC_SITE_URL").replace(/\/$/, "");
  }

  return `${protocol}://${host}`;
}

export function createState() {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function setStateCookie(state: string) {
  const cookieStore = await cookies();
  cookieStore.set(STATE_COOKIE, state, {
    httpOnly: true,
    maxAge: 10 * 60,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production"
  });
}

export async function consumeStateCookie() {
  const cookieStore = await cookies();
  const state = cookieStore.get(STATE_COOKIE)?.value;
  cookieStore.delete(STATE_COOKIE);
  return state;
}

export function renderDecapCallback(status: "success" | "error", content: unknown) {
  const payload = JSON.stringify(content).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Authorizing Decap CMS</title>
  </head>
  <body>
    <p>Authorizing Decap CMS...</p>
    <script>
      (function () {
        var provider = ${JSON.stringify(GITHUB_PROVIDER)};
        var status = ${JSON.stringify(status)};
        var content = ${payload};
        function receiveMessage(message) {
          if (!window.opener) return;
          window.opener.postMessage(
            "authorization:" + provider + ":" + status + ":" + JSON.stringify(content),
            message.origin
          );
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        if (window.opener) {
          window.opener.postMessage("authorizing:" + provider, "*");
        }
      })();
    </script>
  </body>
</html>`;
}
