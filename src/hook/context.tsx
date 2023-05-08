import { createContext, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

interface PropsContentContext {
  children: ReactNode
}

export const ContentContext = createContext({})

export function ContainerContext({ children }: PropsContentContext) {
  const navigate = useNavigate()
  const handleBackNaviigate = () => {
    navigate(-1)
  }

  return (
    <ContentContext.Provider value={{ handleBackNaviigate }}>
      {children}
    </ContentContext.Provider>
  )
}
