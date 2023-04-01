import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Extra from './components/Extra/Extra'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App" data-theme="light">
      <Header></Header>
      <Blogs></Blogs>
      <Extra></Extra>
      <Footer></Footer>
    </div>
  )
}

export default App
