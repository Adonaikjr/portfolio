import { useNavigate } from 'react-router-dom'

export function Stacks() {
  const navigate = useNavigate()
  const handleBack = () => {
    navigate(-1)
  }
  return (
    <>
      <h1>Pagina em construção...</h1>
      <p>Te aguardo em breve...</p>
      <br />
      <button onClick={handleBack}>Voltar</button>
      <br />
    </>
  )
}
