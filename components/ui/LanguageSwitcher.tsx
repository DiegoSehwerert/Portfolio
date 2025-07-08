"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { Globe } from "lucide-react";

const locales = ["es", "en"] as const;

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [open, setOpen] = useState(false);

  const handleLocaleChange = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg shadow-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition border border-gray-200"
        >
          <Globe className="w-4 h-4" />
          {currentLocale.toUpperCase()}
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                  locale === currentLocale ? "text-blue-600 font-bold" : ""
                }`}
              >
                {locale.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
