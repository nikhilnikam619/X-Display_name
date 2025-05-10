import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const [first,setFirst]=useState("")
  const [last,setLast]=useState("")

  return (
    <>
      <div>
      <h1>Full Name Display</h1>
        <form action="" onSubmit={(e)=>{
          e.preventDefault()
         
          setFirst(e.target[0].value)
          setLast(e.target[1].value)
        }}>
          <label htmlFor="">First Name : <input required type="text" onChange={()=>{
            setFirst("")
             setLast("")
          }}/></label><br />
          <br />
          <label htmlFor="">Last Name :  <input required type="text" onChange={()=>{
            
            setLast("")
          }}/></label><br />
          <br />
          <button>Submit</button>
          {last&&<p>Full Name :{first} {last}</p>}


        </form>
      </div>
      
    </>
  )
}

export default App
