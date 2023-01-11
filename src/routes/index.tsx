import { Route, Routes } from 'react-router-dom'
import { LayoutDefault } from '../components/layout/Default'
import { App } from '../pages/app/App'
import { Contact } from '../pages/Contact'
import { Project } from '../pages/Project'
import { Stacks } from '../pages/Stacks'
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route path="/" element={<App />} />
        <Route path="/projetos" element={<Project />} />
        <Route path="/contato" element={<Contact />} />
      </Route>
      <Route path="/stacks" element={<Stacks />} />
    </Routes>
  )
}
