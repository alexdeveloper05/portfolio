import { ThemeProvider } from "next-themes"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"
import NavBar from "@/components/navBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <NavBar/>
            <main>
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}