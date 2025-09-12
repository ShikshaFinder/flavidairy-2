# Localized Assets

This directory contains locale-specific assets for the EU multilingual theme.

## Structure

```
locales/
├── en/
│   └── images/          # English-specific images
├── fr/
│   └── images/          # French-specific images  
├── de/
│   └── images/          # German-specific images
└── es/
    └── images/          # Spanish-specific images
```

## Usage

Place locale-specific assets (images, documents, etc.) in the appropriate language folder.

Example:
- `locales/en/images/hero-banner.jpg` - English hero banner
- `locales/fr/images/hero-banner.jpg` - French hero banner
- `locales/de/images/hero-banner.jpg` - German hero banner
- `locales/es/images/hero-banner.jpg` - Spanish hero banner

## Fallback Logic

If a locale-specific asset is not found, the application will:
1. First look for the asset in the requested locale folder
2. Fall back to the English (en) version
3. Finally fall back to the default asset in `/public/images/`

This ensures all locales have appropriate visual content while allowing for localization flexibility.
