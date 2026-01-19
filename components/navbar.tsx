"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, User, FolderKanban, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import ThemeSelector from "@/components/themeSelector"
import LenguajeSelector from "@/components/languageSelector"
import { cn } from "@/lib/utils"

const navItems = [
  { key: "about", url: "/", icon: User },
  { key: "projects", url: "/projects", icon: FolderKanban },
  { key: "contact", url: "/contact", icon: Mail },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="font-['Clash_Display'] font-bold text-xl">
          {t.nav.title}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.url}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.url
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </Link>
          ))}
        </nav>

        {/* Right side - Theme & Language */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex gap-2">
            <LenguajeSelector />
            <ThemeSelector />
          </div>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.key}
                    href={item.url}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-lg font-medium transition-colors",
                      pathname === item.url
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {t.nav[item.key as keyof typeof t.nav]}
                  </Link>
                ))}
              </nav>

              {/* Mobile Theme & Language */}
              <div className="flex gap-2 mt-8 sm:hidden">
                <LenguajeSelector />
                <ThemeSelector />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
