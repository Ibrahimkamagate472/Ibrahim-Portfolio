import { Routes, Route } from 'react-router-dom'
import { MainLayout } from './mainLayout/index'
import { HomePage, About, Projects, Contact } from './pages/pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}
export default App
