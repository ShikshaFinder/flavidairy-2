"use client";

import { GoogleTranslate } from "./GoogleTranslate";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  return <GoogleTranslate className={className} />;
}
