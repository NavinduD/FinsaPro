import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/home.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'

function App() {

  return (
    <div className="dark text-foreground bg-background">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
