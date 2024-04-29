import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Slider from './component/Slider'
import ProductionHouse from './component/ProductionHouse'
import GeneralMovieList from './component/GeneralMovieList'

function App() {


  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse /> 
      <GeneralMovieList />
    </>
  )
}

export default App
