 
import './App.css'
import Card from './Components/Card'
import Header from './Components/Header'

function App() {
  

  return (
    <>

      <Header/>
      
      <div className=' p-5 flex items-center justify-between '>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
      </div>
      <div className=' flex items-center justify-between'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      
      </div>
      

    </>
  )
}

export default App
