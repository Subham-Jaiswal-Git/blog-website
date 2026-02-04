import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/ArticleGrid'
import ArticleGrid from './components/ArticleGrid'
function App() {
  

  return (
    <>
      <Header/>
      <Hero/>
      <ArticleGrid/>
      <Footer/>
    </>
  )
}

export default App
