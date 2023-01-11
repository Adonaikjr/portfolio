import styled from 'styled-components'
export const ContainerBlog = styled.main`
  h1 {
    text-align: center;
    font-size: 50px;
  }
`
export const Section = styled.section`
  border: solid transparent;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 50px;
  }
`

export const Article = styled.article`
  border: solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 40vh;
`
