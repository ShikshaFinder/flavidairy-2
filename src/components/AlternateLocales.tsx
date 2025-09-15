import { locales } from "@/i18n";

interface AlternateLocalesProps {
  baseUrl?: string;
  pathname?: string;
  locale?: string;
}

export function AlternateLocales({
  baseUrl = "https://euronovas.com",
  pathname = "/",
  locale = "en",
}: AlternateLocalesProps) {
  // Get the path without the locale prefix
  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

  return (
    <>
      {locales.map((loc) => (
        <link
          key={loc}
          rel="alternate"
          hrefLang={loc}
          href={`${baseUrl}/${loc}${pathWithoutLocale}`}
        />
      ))}
      {/* Add x-default for the default locale */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}/en${pathWithoutLocale}`}
      />
    </>
  );
}
