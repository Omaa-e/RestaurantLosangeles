import React from 'react'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Fixed from './components/Fixed'
import Los from './components/Los'

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Contact />
      <Fixed />
      <Los/>
      {/* <Footer /> */}
    </div>
  )
}

export default App