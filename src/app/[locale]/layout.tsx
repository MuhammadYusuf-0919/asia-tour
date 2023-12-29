import "@/styles/globals.css"
import { ReactNode } from "react"
import Header from "@/components/Header"
import { NextIntlClientProvider, useMessages } from "next-intl"

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: any
}) {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          {/* Footer */}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
