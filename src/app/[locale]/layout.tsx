
import "@/styles/globals.css"

import { ReactNode } from "react"
import { NextIntlClientProvider, useMessages } from "next-intl"

export default function LocaleLayout({ children, params: { locale } }: { children: ReactNode, params: { locale: string } }) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body className='w-[100%] overflow-x-hidden z-1'>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
