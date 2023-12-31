
import "@/styles/globals.css"

import { ReactNode } from "react"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Alper Tunga Tour',
  description: 'The official Alper Tunga Tour agency site.',
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  }
}
export default function LocaleLayout({ children, params: { locale } }: { children: ReactNode, params: { locale: string } }) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="icon" href="../favicon.ico" type="image/png" sizes="any" />
      </head>
      <body className='w-[100%] overflow-x-hidden z-1'>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}