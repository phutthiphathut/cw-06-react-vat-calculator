import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
function App() {
  const [count, setCount] = useState(0)
  const [a, setA] = useState(9)
  const [vat, setVAT] = useState(0)
  // 1. Add a variable b,
  // 2. Add a button to increase b
  // 3. on click "Increase B" button,
  // Use value of count and a, b = count + a
 
  function addA() {
    setA(a + 1)
    console.log(a)
  }
 
  const addB = () => {
    setVAT(count + a)
  }
 
  const handler = (e) => {
    const price = e.target.value
    console.log(price)
    setA(price)
    let v = price * 0.07
    setVAT(Math.round(v * 100) / 100)
  }

 
 
  return (
    <>
    <input type="number" value={a}
      style={ {fontSize: '30pt'} }
      onChange={handler}/>
 
      <h1>Gross Price = {a}</h1>
      <h1>VAT = {vat}</h1>
      <div className="card">
        
 
        <button onClick={addA}>Increase A</button>
        <button onClick={addB}>Increase B</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
 
    </>
  )
}
 
export default App