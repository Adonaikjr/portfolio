import { ContainerButton } from './styled'

interface typeButtonProps {
  title: any
}

export function Button({ title, ...rest }: typeButtonProps) {
  return <ContainerButton {...rest}>{title}</ContainerButton>
}
