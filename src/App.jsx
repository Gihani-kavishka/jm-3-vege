import { useState } from 'react'
import './App.css'
import Navbar from './shared/Navbar'
import Home from '../src/pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <div>{count}</div>;
    <div>{setCount}</div>;
   <Navbar/>
   <Home />

   
    </>
  )
}

export default App
