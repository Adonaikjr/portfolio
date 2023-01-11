import { ContainerBlog, Section, Article } from './styled'
import ImgDevTools from '../../assets/dom1.png'
import visualDom from '../../assets/dom2.png'
export function Blog() {
  return (
    <ContainerBlog>
      <h1>Avançando com JavaScript</h1>
      <Section>
        <h2>DOM</h2>
        <p>Introdução DOM</p>
      </Section>

      <Article>
        <h3>O que é DOM?</h3>
        <ul>
          <li>
            <strong> Document Object Model</strong>
            <p>Modelagem do documento como objeto JavaScript</p>
          </li>
          <li>
            <strong>Representação do HTML em objetos JavaScript</strong>
            <p>Atributos (propriedades) e métodos (functionalidades)</p>
          </li>
          <li>
            <strong>Criado pelo navegador (browser)</strong>
            <p>Representa uma interface (API) usada no navegador</p>
          </li>
        </ul>
      </Article>

      <Article>
        <h3>Pra que serve?</h3>
        <ul>
          <li>
            <strong>JavaScript usa a DOM para se conectar ao HTML</strong>
            <p>DOM não é o JavaScript</p>
          </li>
          <li>
            <strong>Manipular o HTML com JavaScript</strong>
            <p>Modificar o HTML, os estilos e até disparar ações</p>
          </li>
        </ul>
      </Article>
      <Section>
        <h3>Dev Tools</h3>
        <p>
          Através das ferramentas do desenvolvedor <span>Dev Tools</span>,
          observaremos a DOM.
        </p>
        <img src={ImgDevTools} alt="dom" />
      </Section>
      <Section>
        <h3>Exemplo visual</h3>
        <img src={visualDom} alt="visual dom" width={800} />
      </Section>
    </ContainerBlog>
  )
}
