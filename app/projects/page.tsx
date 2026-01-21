"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import { FaGithub, FaPlay } from "react-icons/fa"
import { SiRust, SiNodedotjs, SiReact } from "react-icons/si"

export default function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      name: t.projects.project2.name,
      description: t.projects.project2.description,
      github: "https://github.com/alexdeveloper05/SSChat",
      image: "/sschat.png",
      video: "/sschat.mp4",
      technologies: [
        { name: "Node.js", icon: SiNodedotjs, color: "bg-green-500/10 text-green-500 hover:bg-green-500/20" },
        { name: "React Native", icon: SiReact, color: "bg-cyan-500/10 text-cyan-500 hover:bg-cyan-500/20" }
      ]
    },
    {
      name: t.projects.project1.name,
      description: t.projects.project1.description,
      github: "https://github.com/alexdeveloper05/MemoryCacheSystem",
      technologies: [
        { name: "Rust", icon: SiRust, color: "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20" }
      ]
    }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center sm:text-left">
        <h1 className="font-['Clash_Display'] text-3xl sm:text-4xl md:text-5xl font-bold">
          {t.projects.title}
        </h1>
        <p className="font-['Clash_Display'] font-medium mt-2 text-muted-foreground">
          {t.projects.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
            {project.image && project.video ? (
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-video rounded-t-lg overflow-hidden cursor-pointer">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <FaPlay className="size-5 text-gray-800 ml-0.5" />
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden flex items-center justify-center bg-black">
                  <video src={project.video} controls autoPlay className="max-w-full max-h-[85vh] object-contain" />
                </DialogContent>
              </Dialog>
            ) : (
              <div className="aspect-video rounded-t-lg bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                {project.technologies[0] && (() => {
                  const Icon = project.technologies[0].icon
                  return <Icon className="size-16 text-muted-foreground/30" />
                })()}
              </div>
            )}
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{project.name}</CardTitle>
              <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech.name}
                    variant="outline"
                    className={`${tech.color} border-0 px-2 py-1 text-xs font-medium`}
                  >
                    <tech.icon className="size-3 mr-1" />
                    {tech.name}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                {project.github && (
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="size-4 mr-1.5" />
                      {t.projects.viewCode}
                    </a>
                  </Button>
                )}
                {project.video && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="flex-1">
                        <FaPlay className="size-3 mr-1.5" />
                        {t.projects.watchDemo}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden flex items-center justify-center bg-black">
                      <video src={project.video} controls autoPlay className="max-w-full max-h-[85vh] object-contain" />
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
