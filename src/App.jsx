import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Categories, Home, Login, Questions, Result, Rules, Signup,NotFound } from './pages'
import { Navbar } from './components'
import { Toaster } from 'react-hot-toast';
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
        <Route path='/result/:id' element={<Result/>}/>
        <Route path = '*' element={<NotFound />} />
      </Routes>
      <Toaster/>
    </Router>
    
  )
}

export default App
