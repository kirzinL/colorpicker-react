import { useState } from 'react'
import './App.css'
import ColorPicker from '../component/Colorpicker'
import Footer from '../component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
     <div className="App">
      <ColorPicker />
      <Footer />
     </div>
    </div>
  )
}

export default App
