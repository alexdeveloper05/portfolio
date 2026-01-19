"use client"

import Image from "next/image";
import profile from "../public/photo-web.png"
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import LinkButton from "@/components/linkButton";
import AboutMe from "@/components/aboutMeCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      {/* Title */}
      <div className="flex flex-1">
        <p className="font-['Clash_Display'] text-6xl font-bold">
          {t.about.title}
        </p>
        <Image
          src={profile}
          alt="Profile image"
          width={130}
          className="flex-shrink-0 rounded-full bg-gray-100"
        />
      </div>
      {/* Subtitle */}
      <p className="font-['Clash_Display'] font-medium mb-8">
        {t.about.subtitle}
      </p>
      {/* About me, linkedin and github */}
      <div className="">
        {/* Buttons */}
        <div className="">
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
        </div>

        {/* About me */}
        <AboutMe />

      </div>

    </div>
  );
}