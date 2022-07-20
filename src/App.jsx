import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData]=useState([])
  const handleClick=()=>{
    fetch("http://localhost:8080/articles")
    .then((res)=>setData(res.data))
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Get Data</button>
    </div>
  )
}

export default App
