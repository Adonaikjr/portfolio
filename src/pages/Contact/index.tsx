import { ContainerContact } from './style'

export function Contact() {
  return (
    <ContainerContact>
      <form>
        <legend>Contato</legend>
        <fieldset>
          <label>Nome:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="text" />
          <label>Telefone:</label>
          <input type="text" />
          <label>Mensagem:</label>
          <textarea />
        </fieldset>
      </form>
    </ContainerContact>
  )
}
