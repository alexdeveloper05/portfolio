"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SiAmazonwebservices, SiVmware, SiLinux } from "react-icons/si"
import { FaNetworkWired, FaCloud, FaMicrosoft } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"

export default function Experience() {
  const { language } = useLanguage()
  const t = translations[language]

  const experiences = [
    {
      role: t.about.experience.job2.title,
      company: t.about.experience.job2.companyName,
      period: "2025 - Actually",
      description: t.about.experience.job2.description,
      technologies: [
        { name: "AWS", icon: SiAmazonwebservices, color: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20" },
        { name: "Azure", icon: FaMicrosoft, color: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20" },
        { name: "Networking", icon: FaNetworkWired, color: "bg-green-500/10 text-green-500 hover:bg-green-500/20" }
      ]
    },
    {
      role: t.about.experience.job1.title,
      company: t.about.experience.job1.companyName,
      period: "2025",
      description: t.about.experience.job1.description,
      technologies: [
        { name: "VMWare", icon: SiVmware, color: "bg-gray-600/10 text-gray-600 hover:bg-blue-600/20" },
        { name: "Linux", icon: SiLinux, color: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20" },
        { name: "Cloud", icon: FaCloud, color: "bg-sky-500/10 text-sky-500 hover:bg-sky-500/20" }
      ]
    }
  ]

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
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
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
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
