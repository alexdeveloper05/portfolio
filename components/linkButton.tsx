import { Button } from "@/components/ui/button"
import { IconType } from "react-icons"

interface LinkButtonProps {
  href: string
  icon: IconType
  label: string
  download?: boolean
}

const LinkButton = ({ href, icon: Icon, label, download }: LinkButtonProps) => (
  <Button className="gap-2 mb-4 mr-4" asChild>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={download ? true : undefined}
    >
      <Icon className="size-4" />
      {label}
    </a>
  </Button>
)

export default LinkButton
