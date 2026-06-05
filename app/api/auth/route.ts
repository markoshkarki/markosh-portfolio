import { NextResponse } from "next/server";

import { createState, getRequestOrigin, getRequiredEnv, setStateCookie } from "@/app/api/_lib/decap-oauth";

export const runtime = "nodejs";


export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get("provider") ?? "github";

  if (provider !== "github") {
    return NextResponse.json({ error: "Unsupported OAuth provider" }, { status: 400 });
  }

  const clientId = getRequiredEnv("GITHUB_CLIENT_ID");
  const scope = process.env.GITHUB_OAUTH_SCOPE ?? "repo,user";
  const state = createState();
  const origin = await getRequestOrigin();
  const redirectUri = `${origin}/api/callback`;

  await setStateCookie(state);

  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("redirect_uri", redirectUri);
  authUrl.searchParams.set("scope", scope);
  authUrl.searchParams.set("state", state);
  authUrl.searchParams.set("allow_signup", "true");

  return NextResponse.redirect(authUrl);
}

