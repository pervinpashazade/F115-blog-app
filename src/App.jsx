import React, { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './components/pages/Home/Home'
import BlogItem from './components/pages/Blog/BlogItem'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import BlogCreate from './components/pages/Admin/BlogCreate'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const [theme, setTheme] = useState(localStorage.theme)
  const [age, setAge] = useState(7)

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (theme === "dark") {
      // current theme => dark
      setTheme("light")
      localStorage.setItem("theme", "light")
      document.body.classList.remove("dark")
    } else {
      // current theme => light
      setTheme("dark")
      localStorage.setItem("theme", "dark")
      document.body.classList.add("dark")
    }
  }

  const sayHello = () => {
    alert("Salam")
  }

  const contextValue = {
    theme,
    toggleTheme,
    age,
    setAge,
    version: "1.55.09",
    sayHello
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<BlogItem />} />
          <Route path='/admin' element={<BlogCreate />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App