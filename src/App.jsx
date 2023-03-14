import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {MisRutas} from "../src/routers/routes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>        
      <header>
      <h1 className='title'>🎬..Peliculiculas..🎬</h1>
      </header>
      <MisRutas/>
    </div>
  )
}

export default App
