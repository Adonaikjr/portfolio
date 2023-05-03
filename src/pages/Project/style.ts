import styled from 'styled-components'

export const ContainerProject = styled.main`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  overflow: auto;
  transition: 1s;
  ::-webkit-scrollbar {
    width: 6px;
    transition: 1s;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px;
    transition: 1s;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.base_border};
    transition: 1s;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: white;
    transition: 1s;
  }
`
