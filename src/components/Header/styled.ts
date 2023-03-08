import { Link } from 'react-router-dom'
import styled from 'styled-components'
import capa from '../../assets/capa.svg'

export const ContainerHeader = styled.header`
  box-shadow: 0px 1px 10px;
  background-image: url(${capa});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    border: none;
  }
`
export const NavigateBack = styled(Link)``

export const Nav = styled.nav`
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 5px transparent;
    border-radius: 5px;
    color: ${({ theme }) => theme.white};
    :hover {
      border-radius: 5px;
      border-bottom: solid ${({ theme }) => theme.blue};
    }
  }
`

export const Rotate = styled.div`
  display: inline-block;
  animation: rotate 7s linear infinite;
  font-size: 1.2rem;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`
