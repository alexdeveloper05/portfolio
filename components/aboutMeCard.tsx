"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa"

export default function AboutMe() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{t.about.card.title}</CardTitle>
        <CardDescription>{t.about.card.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{t.about.card.content}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FaEnvelope className="size-4 text-primary" />
            <a href={`mailto:${t.personal.email}`} className="hover:text-foreground transition-colors">
              {t.personal.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FaPhone className="size-4 text-primary" />
            <a href={`tel:${t.personal.phone}`} className="hover:text-foreground transition-colors">
              {t.personal.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FaMapMarkerAlt className="size-4 text-primary" />
            <span>{t.personal.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <FaGithub className="size-4 text-primary" />
            <a href={`https://${t.personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              {t.personal.github}
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground sm:col-span-2">
            <FaLinkedin className="size-4 text-primary" />
            <a href={`https://${t.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              {t.personal.linkedin}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}