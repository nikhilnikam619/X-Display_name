import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [first,setFirst]=useState("")
  const [last,setLast]=useState("")

  return (
  
      <div>
  
        <form action="" onSubmit={(e)=>{
          e.preventDefault()
         
          setFirst(e.target[0].value)
          setLast(e.target[1].value)
        }}>
              <h1>Full Name Display</h1>
          <label htmlFor="">First Name : <input required type="text" onChange={(e) => setFirst(e.target.value)}/></label><br />
          <br />
          <label htmlFor="">Last Name :  <input required type="text" onChange={(e) => setLast(e.target.value)}/></label><br />
          <br />
          <button type='submit' data-testid="submit-btn">Submit</button>
         

         

        </form>

        {first && last &&<p>Full Name : {first} {last}</p>}

      </div>
      
   
  )
}

export default App
