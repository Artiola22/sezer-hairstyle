import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Pages/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route />
      </Routes>
    </div>
  )
}

export default App
