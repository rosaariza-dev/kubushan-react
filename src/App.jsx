import './App.css'
import Footer from './components/global/Footer'
import About from './components/sections/About'
import Coworking from './components/sections/Coworking'
import Hero from './components/sections/Hero'
import Menu from './components/sections/Menu'
import Services from './components/sections/Services'
import Subscription from './components/sections/Subscription'

function App() {

  return (
   <>
   <Hero /> 
   <About />
   <Menu />
   <Services />
   <Coworking />
   <Subscription />
   <Footer />
   </>
  )
}

export default App
