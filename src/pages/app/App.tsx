import { ContainerApp } from './styled'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/all'
import Balance from 'react-wrap-balancer'

export function App() {
  return (
    <ContainerApp>
      <section>
        <h1>
          <Balance>Hello World 👋</Balance>
        </h1>
        <h2>Sou Adonai Junior, Desenvolvedor Front-end.</h2>
        <p>
          Tenho experiência de 2 anos em desenvolvimento web e mobile, tenho
          conhecimentos em React, React-Native, Typescript, Node-Js, Javascript,
          Html, Css, Banco de dados Relacional, Sql, Styled-components e Sass.
        </p>
        <span>
          <a
            href="http://linkedin.com/in/adonaikjr"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={30} />
          </a>
          <a
            href="http://github.com/adonaikjr"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={30} />
          </a>
        </span>
      </section>
    </ContainerApp>
  )
}
