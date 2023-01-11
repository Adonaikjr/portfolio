import { Outlet } from 'react-router-dom'
import { Header } from '../../Header'
import { ContainerLayoutDefault } from './styled'
import { Footer } from '../../Footer'
export function LayoutDefault() {
  return (
    <ContainerLayoutDefault>
      <Header />
      <Outlet />
      <Footer />
    </ContainerLayoutDefault>
  )
}
