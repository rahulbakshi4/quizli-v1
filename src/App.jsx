import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Categories, Home, Login, Questions, Rules, Signup } from './pages'
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
        <Route path='/rules' element={<Rules/>}/>
        <Route path='/quiz/:id' element={<Questions/>}/>
      </Routes>
    </Router>
  )
}

export default App
