import { Button } from "@/components/ui/button"
import { IconType } from "react-icons"

interface LinkButtonProps {
  href: string
  icon: IconType
  label: string
}

const LinkButton = ({ href, icon: Icon, label }: LinkButtonProps) => (
  <Button className="gap-2 mb-4 mr-4" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="size-4" />
      {label}
    </a>
  </Button>
)

export default LinkButton
