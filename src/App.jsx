import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(0)
  const addValue=()=>{
    if (counter<20)
      {
        setCounter(counter + 1);

      }
   
  }
  const decreaseValue=()=>{
    if (counter>0){
    setCounter(counter - 1)
    }
  }

  return (
    <>
     
      <h1>React </h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={decreaseValue}>Decrease Value</button>
      
    </>
  )
}

export default App
