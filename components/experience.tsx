"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

const experiences = [
  {
    role: "Job Title",
    company: "Company Name",
    period: "2023 - Present",
    description: "Brief description of your role and responsibilities.",
    technologies: ["AWS", "Kubernetes", "TypeScript"]
  },
  {
    role: "Previous Job Title",
    company: "Previous Company",
    period: "2021 - 2023",
    description: "Brief description of your role and responsibilities.",
    technologies: ["Java", "Docker", "PostgreSQL"]
  }
]

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{t.about.experience.title}</CardTitle>
        <CardDescription>{t.about.experience.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-primary pl-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="font-semibold">{exp.role}</h3>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{exp.company}</p>
            <p className="text-sm mb-3">{exp.description}</p>
            <div className="flex flex-wrap gap-1">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
