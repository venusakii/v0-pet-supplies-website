import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CookieNotice } from "@/components/cookie-notice"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "PuppyStore - Premium Small Pet Accessories & Supplies",
  description:
    "Discover the best accessories and supplies for small dogs and pets. Expert reviews, personalized recommendations, and premium quality products.",
  generator: "PuppyStore.com",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>
          {children}
          <CookieNotice />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
