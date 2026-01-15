"use client";

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

import ThemeSelector from "@/components/themeSelector"
import LenguajeSelector from "@/components/languageSelector"

const NavBar = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <nav className="border-b">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">{t.nav.title}</h1>
            <div className="flex gap-2">
                <LenguajeSelector />
                <ThemeSelector />
            </div>
            </div>
        </nav>
    )
}

export default NavBar;