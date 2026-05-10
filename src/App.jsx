import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/index'
import { HomePage, About } from './pages/pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  )
}
export default App
