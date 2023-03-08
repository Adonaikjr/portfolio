import styled from 'styled-components'
export const ContainerInput = styled.div`
  width: 100%;
  input {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: ${(props) => props.theme.base_input};
    border: solid 1px ${(props) => props.theme.base_border};
    color: ${(props) => props.theme.base_subtitle};
    padding-left: 0.5rem;
    font-size: 18px;
  }
`
