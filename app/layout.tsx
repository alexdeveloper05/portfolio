import { ThemeProvider } from "next-themes"
import "./globals.css"
import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Developer | Cloud Infrastructure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
