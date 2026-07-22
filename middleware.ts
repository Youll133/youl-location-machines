import { NextRequest } from "next/server";
import { updateSession } from "./lib/supabaseMiddleware";

export async function middleware(request: NextRequest) {
  return (await updateSession(request)).response;
}

export const config = {
  matcher: ["/admin/:path*"],
};