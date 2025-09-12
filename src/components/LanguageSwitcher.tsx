"use client";

import { useState, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ChevronDown, Globe } from 'lucide-react';
import { MotionDiv, MotionButton } from '@/components/ui/motion';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/motionVariants';
import { locales, type Locale } from '@/i18n';

const languageNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français', 
  de: 'Deutsch',
  es: 'Español'
};

const languageFlags: Record<Locale, string> = {
  en: '🇺🇸',
  fr: '🇫🇷',
  de: '🇩🇪', 
  es: '🇪🇸'
};

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLocaleChange = (newLocale: Locale) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      // Replace the locale in the pathname
      const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.push(newPathname);
      setIsOpen(false);
    });
  };

  const currentLocale = locale as Locale;

  return (
    <div className={`relative inline-block ${className}`}>
      <MotionButton
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral bg-white hover:bg-neutral-light transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isPending}
      >
        <Globe size={16} className="text-primary" />
        <span className="text-sm font-medium">
          {languageFlags[currentLocale]} {languageNames[currentLocale]}
        </span>
        <ChevronDown 
          size={16} 
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </MotionButton>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <MotionDiv
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral z-20"
          >
            <MotionDiv
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="py-2"
            >
              {locales.map((loc) => (
                <MotionButton
                  key={loc}
                  variants={staggerItem}
                  type="button"
                  onClick={() => handleLocaleChange(loc)}
                  disabled={isPending}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-neutral-light transition-colors ${
                    loc === currentLocale 
                    ? 'bg-primary/5 text-primary border-r-2 border-primary' 
                      : 'text-black'
                  }`}
                  whileHover={{ x: 2 }}
                >
                  <span className="text-lg">{languageFlags[loc]}</span>
                  <span className="text-sm font-medium">
                    {languageNames[loc]}
                  </span>
                  {loc === currentLocale && (
                    <span className="ml-auto text-xs text-primary">✓</span>
                  )}
                </MotionButton>
              ))}
            </MotionDiv>
          </MotionDiv>
        </>
      )}

      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-md">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
