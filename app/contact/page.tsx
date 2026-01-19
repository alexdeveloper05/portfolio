"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/lib/translations"
import LinkButton from "@/components/linkButton"
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center sm:text-left">
        <h1 className="font-['Clash_Display'] text-3xl sm:text-4xl md:text-5xl font-bold">
          {t.contact.title}
        </h1>
        <p className="font-['Clash_Display'] font-medium mt-2 text-muted-foreground">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>{t.contact.form.send}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder={t.contact.form.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder={t.contact.form.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <Textarea
                placeholder={t.contact.form.message}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <Button type="submit" className="w-full sm:w-auto" disabled={status === "loading"}>
                {status === "loading" ? t.contact.form.sending : t.contact.form.send}
              </Button>
              {status === "success" && (
                <p className="text-green-600 text-sm">{t.contact.form.success}</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">{t.contact.form.error}</p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Contact Info & Social Links */}
        <div className="space-y-6">
          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>{t.contact.info.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="size-5 text-muted-foreground" />
                <a href="mailto:alexdeveloper2005@gmail.com" className="hover:underline">
                  alexdeveloper2005@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="size-5 text-muted-foreground" />
                <span>Bilbao, Spain</span>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>{t.contact.social}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap">
                <LinkButton
                  href="https://github.com/alexdeveloper05"
                  icon={FaGithub}
                  label="GitHub"
                />
                <LinkButton
                  href="https://linkedin.com/in/álex-frías-angulo-34b1b3271"
                  icon={FaLinkedin}
                  label="LinkedIn"
                />
                <LinkButton
                  href="/CV.pdf"
                  icon={FaDownload}
                  label={t.about.cv}
                  download
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
