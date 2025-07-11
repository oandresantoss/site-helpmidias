import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Help Mídias IA - Soluções Inteligentes com IA",
  description:
    "Especialistas em automação, IA, infraestrutura Docker e consultoria estratégica. Construa o futuro com nossa comunidade DAO.",
  keywords: "IA, inteligência artificial, automação, Docker, consultoria, N8N, Mautic, chatbots",
  authors: [{ name: "Help Mídias IA" }],
  creator: "Help Mídias IA",
  publisher: "Help Mídias IA",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://helpmidiasdigital.com.br",
    title: "Help Mídias IA - Soluções Inteligentes com IA",
    description: "Especialistas em automação, IA, infraestrutura Docker e consultoria estratégica.",
    siteName: "Help Mídias IA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Help Mídias IA - Soluções Inteligentes com IA",
    description: "Especialistas em automação, IA, infraestrutura Docker e consultoria estratégica.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
