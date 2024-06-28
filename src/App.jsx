import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  
  const [counter, setCounter] = useState(0)
  //let counter = 5
  const addValue = () => {
    //counter++;
    if(counter >= 100){
      setCounter(counter)
    }
    else{
    setCounter(counter + 1)
    }
  } 

  const removeValue = () => {
    if (counter <= 0) {
      setCounter(counter)
    }
    else{
    setCounter(counter - 1)
    }
  }
  return (
    <>
     <h1>Counter Function</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}>Add value</button>
     <br />
     <button 
     onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
