import '@/styles/globals.css'
import { dir } from 'i18next';
import { ReactNode } from "react";
export default function LocaleLayout({ children, params: { locale } }: { children: ReactNode, params: any }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body>{children}</body>
    </html>
  );
}