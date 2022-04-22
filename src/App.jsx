import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ControlledCarousel from './Components/Carusel/Carusel'
import Footer from './Components/Carusel/Footer'
import Header from './Pages/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <ControlledCarousel />
      <Footer />
      <Routes>
        <Route />
      </Routes>
    </div>
  )
}

export default App
