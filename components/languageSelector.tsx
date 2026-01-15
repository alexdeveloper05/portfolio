"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export const title = "Language Selector";

const LenguajeSelector = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const handleLanguageChange = (value: string) => {
    if (value === "en" || value === "es") {
      setLanguage(value);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Languages className="h-4 w-4 mr-2" />
          {t.languageSelector.button}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuLabel>{t.languageSelector.label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup onValueChange={handleLanguageChange} value={language}>
          <DropdownMenuRadioItem value="en">
            <span className="flex items-center gap-2">
              <span>🇺🇸</span>
              <span>English</span>
            </span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="es">
            <span className="flex items-center gap-2">
              <span>🇪🇸</span>
              <span>Español</span>
            </span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LenguajeSelector;