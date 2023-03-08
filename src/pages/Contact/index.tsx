import { useState } from 'react'
import { Button } from '../../components/Button'
import { ContainerContact } from './style'

import emailjs from '@emailjs/browser'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tell, setTell] = useState('')
  const [messege, setMessege] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const templateParams = {
      name,
      email,
      tell,
      messege,
    }

    try {
      emailjs.send(
        'service_8pll32g',
        'template_6zgiqv4',
        templateParams,
        '9WgsQTY5qzUEjns5Z',
      )
      alert('Enviado com sucesso!')
      alert('Obrigado pelo contato 👋')
      setName('')
      setEmail('')
      setMessege('')
      setTell('')
      console.log('email enviado com sucesso')
    } catch (error) {
      console.log(`oops algo de errado, ${error}`)
    }
  }

  return (
    <ContainerContact>
      <form>
        <legend>Contato</legend>
        <fieldset>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Telefone:</label>
          <input
            type="text"
            value={tell}
            onChange={(e) => setTell(e.target.value)}
          />
          <label>Mensagem:</label>
          <textarea
            value={messege}
            onChange={(e) => setMessege(e.target.value)}
          />
          <Button title="Enviar" onClick={handleSubmit} />
        </fieldset>
      </form>
    </ContainerContact>
  )
}
