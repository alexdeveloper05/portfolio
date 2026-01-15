import { ThemeProvider } from "next-themes"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/slideBar"
import ThemeSelector from "@/components/themeSelector"
import LenguajeSelector from "@/components/languageSelector"

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
            <SidebarProvider>
              <AppSidebar />
              <main className="w-full">
                <header className="border-b p-4 flex justify-between items-center">
                  <SidebarTrigger />
                  <div className="flex gap-2">
                    <LenguajeSelector />
                    <ThemeSelector />
                  </div>
                </header>
                <div className="p-8">
                  {children}
                </div>
              </main>
            </SidebarProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}