import React from 'react'
import Nav from './components/Nav'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Fixed from './components/Fixed'
import Los from './components/Los'
import Reservation from './components/Reservation'
import Happenings from './components/Happenings'

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Contact />
      <Fixed />
      <Los/>
      <Reservation/>
      <Happenings/>
      <Footer />
    </div>
  )
}

export default App