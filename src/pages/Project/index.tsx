import { Card } from '../../components/Card'
import { ContainerProject } from './style'
import projectOne from '../../assets/project1.png'
import projectTwo from '../../assets/project2.png'
import projectTree from '../../assets/project3.png'
import projectFor from '../../assets/project4.png'
import projectFive from '../../assets/project5.png'
import projectSix from '../../assets/project6.png'
import projectSeven from '../../assets/project7.png'
import projectEight from '../../assets/project8.png'

export function Project() {
  return (
    <ContainerProject>
      <Card
        title="Projeto de anotações"
        img={projectEight}
        imgAlt="adonaikjr"
        description="Notas | finalizado"
        tags="ReactJs, NodeJs"
        urlProject="notes-adonaikjr.netlify.app/"
      />
      <Card
        title="Site de simples."
        img={projectSeven}
        imgAlt="adonaikjr"
        description="Challenge | finalizado"
        tags="Css, Html"
        urlProject="adonaikjr.github.io/CHALLENGE/"
      />
      <Card
        title="Site de comida."
        img={projectSix}
        imgAlt="adonaikjr"
        description="Site de restaurante | em construção"
        tags="React, Styled-components, NodeJs"
        urlProject="explorer-food-beta.netlify.app/"
      />
      <Card
        urlProject="adonaikjr.github.io/challenge03/"
        title="Componente de Produto simples."
        description="Card de vizualização de produto. | finalizado"
        tags="Html5, Css3"
        img={projectOne}
        imgAlt="projeto um"
      />
      <Card
        title="Encurtamento de URL."
        img={projectTwo}
        imgAlt="adonaikjr"
        description="API de encurtamento de URL shrtcode e armazenamento do navegador. | em ajustes"
        tags="React, Typescript, Hooks, API"
        urlProject="linksbeta.netlify.app/"
      />
      <Card
        title="Site NFTs."
        tags="React, Styled-components"
        description="Site para gerenciar NFTs | em construção"
        img={projectTree}
        imgAlt="adonaikjr"
        urlProject="rocket-nft-beta.netlify.app/"
      />
      <Card
        title="Site de filmes."
        tags="React, Hooks, Axios, Styled-components, API"
        description="Site para vizualizar filmes em cartaz | finalizado"
        img={projectFor}
        imgAlt="projeto um"
        urlProject="my-filmes-beta.netlify.app"
      />
      <Card
        title="Site para descontos Amazon iframe HTML"
        tags="React, Styled-components"
        description="Site Prático e simples. | finalizado"
        img={projectFive}
        imgAlt="projeto um"
        urlProject="descontosflesh.netlify.app"
      />
    </ContainerProject>
  )
}
