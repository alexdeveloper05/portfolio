"use client"

import Image from "next/image";
import profile from "../public/photo-web.png"
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import LinkButton from "@/components/linkButton";
import AboutMe from "@/components/aboutMeCard";
import Experience from "@/components/experience";
import Education from "@/components/education";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      {/* Title */}
      <div className="flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-6 sm:gap-8 mb-8">
        <div className="text-center sm:text-left">
          <p className="font-['Clash_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            {t.about.title}
          </p>
          <p className="font-['Clash_Display'] font-medium mt-4 text-sm sm:text-base text-muted-foreground">
            {t.about.subtitle}
          </p>
        </div>
        <Image
          src={profile}
          alt="Profile image"
          width={130}
          height={130}
          className="flex-shrink-0 rounded-full bg-gray-100 w-24 h-24 sm:w-32 sm:h-32 object-cover"
        />
      </div>
      {/* About me, linkedin and github */}
      <div>
        {/* About me */}
        <AboutMe />

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Download cv */}
        <LinkButton
          href="/cv-es.pdf"
          icon={FaDownload}
          label={t.about.cv}
          download
        />

      </div>

    </div>
  );
}