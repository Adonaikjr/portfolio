import styled from 'styled-components'

export const ContainerContact = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    fieldset {
      padding: 1rem;
      border: none;
      width: 40rem;
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      input {
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
