import styled from 'styled-components'

export const ContainerCard = styled.div`
  border: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  transition: 1s;
  padding: 1rem;
  border-radius: 18px;
  width: 20rem;
  a {
    border: solid none;
  }
  h3,
  p {
    padding: 1rem;
    text-align: center;
  }
  img {
    border-radius: 5px;
    height: 90%;
    width: 95%;
    transition: 0.5s;
    :hover {
      width: 100%;
      height: 100%;
    }
  }
`
