import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Landingpage from './Component/Landingpage'
import Astrologerform from './assets/Astrologer/Astrologerform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/astrologer-form' element={<Astrologerform/>}/>
      
    </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
