import { useState } from 'react'

import './App.css'
import { Lists } from './Components/List'

function App() {
  const [count, setCount] = useState(0)

  return ( <div className="App">
    <Lists/>
    </div>
  )
}

export default App
