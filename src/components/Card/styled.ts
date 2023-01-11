import styled from 'styled-components'

export const ContainerCard = styled.div`
  border: solid;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  transition: 1s;
  width: 31rem;
  padding: 1rem;
  border-radius: 18px;
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
    height: 15rem;
    width: 25rem;
    transition: 1s;
    :hover {
      transition: 1s;
      width: 29rem;
      height: 17rem;
      @media (max-width: 513px) {
        :hover {
          transition: 1s;
          width: 13rem;
          height: 8rem;
        }
      }
    }
  }
  @media (max-width: 513px) {
    width: 15rem;
    transition: 1s;
    img {
      transition: 1s;
      width: 12.5rem;
      height: 7.5rem;
    }
  }
`
