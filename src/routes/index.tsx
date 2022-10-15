import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header'
import { LayoutDefault } from '../components/layout/Default'
import { App } from '../pages/app/App'
export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <LayoutDefault/> }>
        <Route path="/" element={<App />} />
        </Route>
    </Routes>
  )
}
