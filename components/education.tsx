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
import { GraduationCap } from "lucide-react"
import {
  SiAmazonwebservices,
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiReact,
  SiLinux,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeindesign
} from "react-icons/si"
import { FaNetworkWired, FaServer, FaCode, FaJava } from "react-icons/fa"

export default function Education() {
  const { language } = useLanguage()
  const t = translations[language]

  const education = [
    {
      degree: t.about.education.degree3.title,
      institution: t.about.education.degree3.institution,
      period: "2025 - 2026",
      description: t.about.education.degree3.description,
      technologies: [
        { name: "AWS", icon: SiAmazonwebservices, color: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20" },
        { name: "Kubernetes", icon: SiKubernetes, color: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20" },
        { name: "Docker", icon: SiDocker, color: "bg-sky-500/10 text-sky-500 hover:bg-sky-500/20" },
        { name: "Terraform", icon: SiTerraform, color: "bg-purple-500/10 text-purple-500 hover:bg-purple-500/20" },
        { name: "React Native", icon: SiReact, color: "bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20" },
        { name: "Java", icon: FaJava, color: "bg-red-500/10 text-red-500 hover:bg-red-500/20" }
      ]
    },
    {
      degree: t.about.education.degree2.title,
      institution: t.about.education.degree2.institution,
      period: "2023 - 2025",
      description: t.about.education.degree2.description,
      technologies: [
        { name: "AWS", icon: SiAmazonwebservices, color: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20" },
        { name: "Linux", icon: SiLinux, color: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20" },
        { name: "Networking", icon: FaNetworkWired, color: "bg-green-500/10 text-green-500 hover:bg-green-500/20" },
        { name: "Servers", icon: FaServer, color: "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20" },
        { name: "Development", icon: FaCode, color: "bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20" }
      ]
    },
    {
      degree: t.about.education.degree1.title,
      institution: t.about.education.degree1.institution,
      period: "2021 - 2023",
      description: t.about.education.degree1.description,
      technologies: [
        { name: "Photoshop", icon: SiAdobephotoshop, color: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20" },
        { name: "Illustrator", icon: SiAdobeillustrator, color: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20" },
        { name: "InDesign", icon: SiAdobeindesign, color: "bg-pink-500/10 text-pink-500 hover:bg-pink-500/20" }
      ]
    }
  ]

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{t.about.education.title}</CardTitle>
        <CardDescription>{t.about.education.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-primary pl-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="font-semibold flex items-center gap-2">
                {edu.degree}
              </h3>
              <span className="text-sm text-muted-foreground">{edu.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
            <p className="text-sm mb-3">{edu.description}</p>
            <div className="flex flex-wrap gap-2">
              {edu.technologies.map((tech) => (
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
