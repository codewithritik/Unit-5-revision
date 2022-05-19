import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { GithubUser } from './Componets/Github'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <GithubUser/>
    </div>
  )
}

export default App
