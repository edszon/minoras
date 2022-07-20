import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1> lista fuboca de minora</h1>
      <div id="listWrapper">
        <input type="text" placeholder="defina a tarefa"/>
        <input type="number" placeholder="defina o prazo (em dias)"/>
        <button>adicionar tarefa</button>
      </div>
    </div>
  )
}

export default App
