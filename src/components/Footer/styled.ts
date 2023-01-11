import styled from 'styled-components'
import capa from '../../assets/capa.svg'

export const ContainerFooter = styled.footer`
  box-shadow: 0px 1px 10px;
  background-image: url(${capa});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  a {
    text-decoration: none;
    border: none;
  }
`
