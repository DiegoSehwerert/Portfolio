"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const locales = ["es", "en"] as const;

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zIndex: 1000,
      }}
    >
      <div className="relative inline-block">
        <select
          value={currentLocale}
          onChange={handleLocaleChange}
          className="
            appearance-none
            px-4 py-2
            pr-10
            rounded-lg
            border border-gray-300
            bg-white
            text-gray-800
            hover:bg-gray-50
            hover:border-blue-400
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200
            transition
            duration-200
            shadow-md
            font-semibold
            text-base
            outline-none
            cursor-pointer
          "
          aria-label="Select language"
          style={{
            boxShadow: "none",
            minWidth: "90px",
          }}
        >
          {locales.map((locale) => (
            <option key={locale} value={locale}>
              {locale.toUpperCase()}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <span className="pointer-events-none absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
            <path
              d="M7 10l5 5 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
