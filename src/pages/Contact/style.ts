import styled from 'styled-components'

export const ContainerContact = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  form {
    width: 100%;
    legend {
      width: 100%;
      text-align: center;
      margin-top: 2rem;
    }
    fieldset {
      padding: 1rem;
      border: none;
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      input {
        width: 100%;
        height: 3rem;
        border-radius: 5px;
      }
      textarea {
        height: 8rem;
        border-radius: 5px;
      }
    }
  }
`
