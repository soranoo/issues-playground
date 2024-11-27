import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const url = new URL(request.url);
  if (url.pathname.startsWith("/page/")) {
    const pageId = url.pathname.split("/")[2];
    return NextResponse.redirect(new URL(`/?pageId=${pageId}`, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/page/:pageId*"],
}
