import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("#242424")
  document.body.style.backgroundColor=color;

  return (
    <>
      <div className="main w-full h-screen duration-200" >
      <div className="card" style={{backgroundColor:color}}>
        <button id='white' onClick={()=>setColor("white")} className='bg-white' style={{backgroundColor:"white",color:"black"}} >
          White
        </button>
        <button onClick={()=>setColor("brown")} style={{backgroundColor:"Brown"}}>
          Brown
        </button>
        <button onClick={()=>setColor("Gray")} style={{backgroundColor:"Gray"}}>
          Gray
        </button>
        <button onClick={()=>setColor("blue")} style={{backgroundColor:"Blue"}}>
          Blue
        </button>
        <button onClick={()=>setColor("red")} style={{backgroundColor:"Red"}}>
          Red
        </button>
        <button onClick={()=>setColor("yellow")} style={{backgroundColor:"Yellow",color:"black"}}>
          Yellow
        </button>
        <button onClick={()=>setColor("purple")} style={{backgroundColor:"Purple"}}>
          Purple
        </button>
        <button onClick={()=>setColor("violet")} style={{backgroundColor:"Violet"}}>
          Violet
        </button>
        <button onClick={()=>setColor("green")} style={{backgroundColor:"Green"}}>
          Green
        </button>
        <button onClick={()=>setColor("pink")} style={{backgroundColor:"Pink"}}>
          Pink
        </button>
      </div>
      </div>
    </>
  )
}

export default App
