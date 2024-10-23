import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
let [counter,setCounter] = useState(15);

  // let counter = 15;
  
  const addValue = () => {
    // console.log(counter);
    if (counter<20) {
      counter = counter + 1;
      setCounter(counter) 
    }
  
  }

  const decreaseValue = () =>{
    if(counter>0) {
      
      setCounter(counter-1)
    };
  }

  return (
    <>
      <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add Value {counter}</button>
      <button 
      onClick={decreaseValue}>Decrease Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
