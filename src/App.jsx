import './App.css'
import Footer from './components/global/Footer'
import About from './components/sections/About'
import Coworking from './components/sections/Coworking'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Subscription from './components/sections/Subscription'

function App() {

  return (
   <>
   <Hero /> 
   <About />
   <Services />
   <Coworking />
   <Subscription />
   <Footer />
   </>
  )
}

export default App
