import { createContext, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface PropsContentContext {
  children: ReactNode
}

export const ContentContext = createContext({})

export function ContainerContext({ children }: PropsContentContext) {
  const navigate = useNavigate()
  const handleBackNaviigate = () => {
    navigate(-1)
  }
  useEffect(() => {
    toast.success('Bem vindo 👋')
  }, [])
  return (
    <ContentContext.Provider value={{ handleBackNaviigate }}>
      {children}
    </ContentContext.Provider>
  )
}
