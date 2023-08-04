import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './components/pages/Home/Home'
import BlogItem from './components/pages/Blog/BlogItem'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import BlogCreate from './components/pages/Admin/BlogCreate'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<BlogItem />} />
        <Route path='/admin' element={<BlogCreate />} />
      </Routes>
    </div>
  )
}

export default App