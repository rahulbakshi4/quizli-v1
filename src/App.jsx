import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Categories, Home } from './pages'
import { Navbar } from './components'
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories/>}/>
      </Routes>
    </Router>
  )
}

export default App
