// middleware.ts
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const middleware = createMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "always",
});

export default function enhancedMiddleware(req: NextRequest) {
  const response = middleware(req);

  // Recoge la mayor cantidad de datos posible del visitante
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
    // Extra: intenta obtener datos de geolocalización si tu plataforma lo soporta
    geo: (req as any).geo || undefined,
    // Extra: información sobre el dispositivo (muy limitada en backend)
    device: {
      isMobile: /mobile/i.test(req.headers.get("user-agent") || ""),
      isTablet: /tablet/i.test(req.headers.get("user-agent") || ""),
      isDesktop: !/mobile|tablet/i.test(req.headers.get("user-agent") || ""),
    },
    // Extra: información sobre el navegador
    browser: (() => {
      const ua = req.headers.get("user-agent") || "";
      if (/chrome|crios|crmo/i.test(ua)) return "Chrome";
      if (/firefox|fxios/i.test(ua)) return "Firefox";
      if (/safari/i.test(ua) && !/chrome|crios|crmo/i.test(ua)) return "Safari";
      if (/edg/i.test(ua)) return "Edge";
      if (/opera|opr/i.test(ua)) return "Opera";
      return "Unknown";
    })(),
    // Extra: sistema operativo
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

  // Aquí puedes enviar visitorData a tu sistema de analytics
  // fetch("https://your-analytics-endpoint", {
  //   method: "POST",
  //   body: JSON.stringify(visitorData),
  //   headers: { "Content-Type": "application/json" },
  // });

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"], // ignora assets
};
