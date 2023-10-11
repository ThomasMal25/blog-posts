import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Aurthors from './pages/Aurthors'
import data from './assets/data'
import Title from './components/Title'
function App() {
  
  const [count, setCount] = useState(0)
  
  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route  path ='/' index element={<Home />} />
          <Route path="posts" element={<Posts  data={data }/>} />
          <Route path="aurthor" element={<Aurthors  data={data}/>} />
         
      </Routes>
    </BrowserRouter>

   
    </>
  )
}

export default App
