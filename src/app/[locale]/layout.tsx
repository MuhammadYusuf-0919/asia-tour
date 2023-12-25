import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css'
import { ReactNode } from "react";
export default function LocaleLayout({ children, params: { locale } }: { children: ReactNode, params: any }) {
  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}