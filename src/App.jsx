import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ControlledCarousel from './Components/Carusel/Carusel'
import Header from './Pages/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <ControlledCarousel />
      <Routes>
        <Route />
      </Routes>
    </div>
  )
}

export default App
