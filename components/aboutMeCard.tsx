import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function AboutMe() {
    const { language } = useLanguage();
    const t = translations[language];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.about.card.title}</CardTitle>
        <CardDescription>{t.about.card.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{t.about.card.content}</p>
      </CardContent>
    </Card>
  )
}