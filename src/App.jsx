import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {

  return(
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    
    </>
  );
}
export default App
