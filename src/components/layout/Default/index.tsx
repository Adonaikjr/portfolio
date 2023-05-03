import { Outlet } from 'react-router-dom'
import { Header } from '../../Header'
import { ContainerLayoutDefault } from './styled'
import { Footer } from '../../Footer'
import { HeroPattern } from '../../../pages/app/heroPattern'

export function LayoutDefault() {
  return (
    <ContainerLayoutDefault>
      <Header />
      <Outlet />
      <HeroPattern />
      <Footer />
    </ContainerLayoutDefault>
  )
}
