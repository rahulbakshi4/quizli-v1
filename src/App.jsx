import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Categories, Home, Login, Signup } from './pages'
import { Navbar } from './components'
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

export default App
