import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  const resolvedLocale = await requestLocale;
  let locale = resolvedLocale || routing.defaultLocale;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  try {
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);

    // Fallback to default locale if current locale fails
    if (locale !== routing.defaultLocale) {
      try {
        const fallbackMessages = (
          await import(`../../messages/${routing.defaultLocale}.json`)
        ).default;
        return {
          locale: routing.defaultLocale,
          messages: fallbackMessages,
        };
      } catch (fallbackError) {
        console.error(`Failed to load fallback messages:`, fallbackError);
        throw new Error("Failed to load any locale messages");
      }
    }

    throw error;
  }
});
