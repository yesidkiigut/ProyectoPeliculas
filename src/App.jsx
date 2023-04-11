import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {MisRutas} from "../src/routers/routes";
import  '../src/components/footer.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>        
      <header>
      <h1 className='title'>🎬..Peliculiculas Premium..🎬</h1>
      </header>
      <MisRutas/>
      <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="item">
                        <ul>
                            <li><a href="#">Diseñado por: Yesid Quintero Gutierrez</a></li>
                            <li><a href="#">React.js Desarrollador Frontend</a></li>
                        </ul>
                    </div>
                <p class="copyright">Copyring 2023</p>
            </div>
            </div>
        </footer>
    </div>
    </div>        
  )  
}

export default App
