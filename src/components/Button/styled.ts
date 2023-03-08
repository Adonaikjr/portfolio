import styled from 'styled-components'

export const ContainerButton = styled.button`
  height: 3rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.base_subtitle};
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transition: 0.5s;
    height: 3.5rem;
  }
`
