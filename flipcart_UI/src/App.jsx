import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbr from './components/Navbr'
import Topbar from './components/Topbar'
import Carousel from './components/Carousel '
import BestElectronics from './components/BestElectronics'
import Beauty_Tols from './components/Beauty_Tols'
import Suggested from './components/Suggested'
import Footer from './components/Footer'
import Topsection from './components/Topsection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbr />

    <div className='bg-gray-100 p-3 '>

      <Topbar />
      <Carousel />
      <BestElectronics />
      <Beauty_Tols />
      <Suggested />
      <Topsection />
      <Footer />
    </div>

    </>
  )
}

export default App
