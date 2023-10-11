import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Aurthors from './pages/Aurthors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route  path ='/' index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="aurthor" element={<Aurthors />} />
         
      </Routes>
    </BrowserRouter>

   
    </>
  )
}

export default App
