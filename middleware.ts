// middleware.ts
import { fstat } from "fs";
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

const middleware = createMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "always",
});

export default function enhancedMiddleware(req: NextRequest) {
  const response = middleware(req);

  const visitorData = {
    ip: req.headers.get("x-forwarded-for") || undefined,
    userAgent: req.headers.get("user-agent"),
    referer: req.headers.get("referer"),
    url: req.nextUrl.href,
    timestamp: new Date().toISOString(),
    method: req.method,
    host: req.headers.get("host"),
    acceptLanguage: req.headers.get("accept-language"),
    cookies: req.cookies ? Object.fromEntries(req.cookies) : undefined,
    protocol: req.nextUrl.protocol,
    pathname: req.nextUrl.pathname,
    search: req.nextUrl.search,
    query: Object.fromEntries(req.nextUrl.searchParams.entries()),
    locale: req.nextUrl.locale,
    headers: Object.fromEntries(req.headers.entries()),
    geo: (req as any).geo || undefined,
    device: {
      isMobile: /mobile/i.test(req.headers.get("user-agent") || ""),
      isTablet: /tablet/i.test(req.headers.get("user-agent") || ""),
      isDesktop: !/mobile|tablet/i.test(req.headers.get("user-agent") || ""),
    },
    browser: (() => {
      const ua = req.headers.get("user-agent") || "";
      if (/chrome|crios|crmo/i.test(ua)) return "Chrome";
      if (/firefox|fxios/i.test(ua)) return "Firefox";
      if (/safari/i.test(ua) && !/chrome|crios|crmo/i.test(ua)) return "Safari";
      if (/edg/i.test(ua)) return "Edge";
      if (/opera|opr/i.test(ua)) return "Opera";
      return "Unknown";
    })(),
    os: (() => {
      const ua = req.headers.get("user-agent") || "";
      if (/windows/i.test(ua)) return "Windows";
      if (/macintosh|mac os x/i.test(ua)) return "MacOS";
      if (/android/i.test(ua)) return "Android";
      if (/linux/i.test(ua)) return "Linux";
      if (/iphone|ipad|ipod/i.test(ua)) return "iOS";
      return "Unknown";
    })(),
  };

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
