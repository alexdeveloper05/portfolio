"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import {
  SiAmazonwebservices,
  SiTerraform,
  SiKubernetes,
  SiOpenjdk,
  SiTypescript,
  SiRust,
  SiPostgresql
} from "react-icons/si"

const technologies = [
  { name: "AWS", icon: SiAmazonwebservices, color: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20" },
  { name: "Terraform", icon: SiTerraform, color: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20" },
  { name: "Kubernetes", icon: SiKubernetes, color: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20" },
  { name: "Java", icon: SiOpenjdk, color: "bg-red-500/10 text-red-500 hover:bg-red-500/20" },
  { name: "TypeScript", icon: SiTypescript, color: "bg-blue-600/10 text-blue-600 hover:bg-blue-600/20" },
  { name: "Rust", icon: SiRust, color: "bg-orange-600/10 text-orange-600 hover:bg-orange-600/20" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "bg-sky-700/10 text-sky-700 hover:bg-sky-700/20" }
]

export default function Technologies() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{t.about.technologies.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech.name}
              variant="outline"
              className={`${tech.color} border-0 px-3 py-1.5 text-sm font-medium transition-colors cursor-default`}
            >
              <tech.icon className="size-4 mr-2" />
              {tech.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
