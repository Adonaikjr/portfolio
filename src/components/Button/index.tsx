import { ContainerButton } from './styled'

interface typeButtonProps {
  title: string
  onClick: any
}

export function Button({ title, onClick, ...rest }: typeButtonProps) {
  return <ContainerButton onClick={onClick}>{title}</ContainerButton>
}
