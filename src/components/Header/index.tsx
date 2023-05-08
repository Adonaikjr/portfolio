import { ContainerHeader, Rotate, NavigateBack, Nav } from './styled'
import componentlogo from '../../assets/react.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <ContainerHeader>
      <NavigateBack to="/">
        <Rotate>
          <img src={componentlogo} height={50} alt="logo" />
        </Rotate>
      </NavigateBack>
      <Nav>
        <Link to="/Contato">Contato</Link>
      </Nav>
    </ContainerHeader>
  )
}
