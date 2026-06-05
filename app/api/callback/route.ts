import { NextResponse } from "next/server";

import {
  consumeStateCookie,
  getRequestOrigin,
  getRequiredEnv,
  renderDecapCallback
} from "@/app/api/_lib/decap-oauth";

export const runtime = "nodejs";

type GitHubTokenResponse = {
  access_token?: string;
  token_type?: string;
  scope?: string;
  error?: string;
  error_description?: string;
};

function htmlResponse(html: string, status = 200) {
  return new NextResponse(html, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const returnedState = searchParams.get("state");
  const expectedState = await consumeStateCookie();

  if (!code) {
    return htmlResponse(renderDecapCallback("error", { message: "Missing GitHub authorization code." }), 400);
  }

  if (!returnedState || !expectedState || returnedState !== expectedState) {
    return htmlResponse(renderDecapCallback("error", { message: "Invalid OAuth state. Please try logging in again." }), 400);
  }

  const origin = await getRequestOrigin();
  const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "user-agent": "markosh-karki-portfolio-decap-cms"
    },
    body: JSON.stringify({
      client_id: getRequiredEnv("GITHUB_CLIENT_ID"),
      client_secret: getRequiredEnv("GITHUB_CLIENT_SECRET"),
      code,
      redirect_uri: `${origin}/api/callback`
    })
  });

  const tokenData = (await tokenResponse.json()) as GitHubTokenResponse;

  if (!tokenResponse.ok || tokenData.error || !tokenData.access_token) {
    return htmlResponse(
      renderDecapCallback("error", {
        message: tokenData.error_description ?? tokenData.error ?? "GitHub OAuth token exchange failed."
      }),
      401
    );
  }

  return htmlResponse(
    renderDecapCallback("success", {
      token: tokenData.access_token,
      provider: "github"
    })
  );
}
