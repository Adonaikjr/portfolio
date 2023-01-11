import { ContainerCard } from './styled'

interface typePropsCard {
  img: string
  imgAlt: string
  title: string
  description: string
  tags: string
  urlProject: string
}

export function Card({
  img,
  imgAlt,
  title,
  description,
  tags,
  urlProject,
}: typePropsCard) {
  return (
    <ContainerCard>
      <h3>{title}</h3>
      <a href={`https://${urlProject}`} target="_blank" rel="noreferrer">
        <img src={img} alt={imgAlt} />
      </a>
      <p>{description}</p>
      <span>{tags}</span>
    </ContainerCard>
  )
}
