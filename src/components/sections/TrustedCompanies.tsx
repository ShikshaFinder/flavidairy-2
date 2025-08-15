import React from "react";
import companies from "@/../public/file.json";

type RawImage =
  | string
  | {
      url?: string;
      src?: string;
      image?: string;
      base64?: string;
      data?: string;
      alt?: string;
      [k: string]: any;
    };

type Company = { id?: number; name?: string; images?: RawImage[] };

function getInitials(name?: string) {
  if (!name) return "Co";
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TrustedCompanies() {
  const companiesArr: Company[] = (companies as Company[]) || [];

  const logos = companiesArr.flatMap((c) => {
    const imgs = c.images ?? [];
    if (imgs.length === 0) {
      // fallback entry so company still appears with initials
      return [{ url: "", alt: c.name ?? "company", name: c.name }];
    }
    return imgs.map((img) => {
      const url =
        typeof img === "string"
          ? img
          : img?.url ??
            img?.src ??
            img?.image ??
            img?.base64 ??
            img?.data ??
            "";
      const alt =
        typeof img === "object"
          ? img.alt ?? c.name ?? "company"
          : c.name ?? "company";
      return { url: url || "", alt, name: c.name };
    });
  });

  if (!logos.length) return null;

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-lg md:text-xl font-semibold text-gray-900 mb-3">
          Trusted by Leading Companies
        </h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Partners and customers who rely on our products
        </p>

        {/* Grid to show all logos at the bottom — colorful by default */}
        <div
          role="list"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 items-center"
        >
          {logos.map((logo, idx) => (
            <div
              role="listitem"
              key={idx}
              className="flex flex-col items-center justify-center p-2 bg-white rounded-md shadow-sm"
              title={logo.name ?? ""}
            >
              {logo.url ? (
                <img
                  src={logo.url}
                  alt={logo.alt ?? logo.name ?? "company logo"}
                  className="h-10 md:h-14 w-auto object-contain transition"
                  loading="lazy"
                />
              ) : (
                <div className="h-10 md:h-14 w-10 md:w-14 rounded-full bg-accent flex items-center justify-center text-white font-semibold text-sm">
                  {getInitials(logo.name)}
                </div>
              )}
              <span className="mt-2 text-xs text-gray-700 text-center truncate w-full">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
