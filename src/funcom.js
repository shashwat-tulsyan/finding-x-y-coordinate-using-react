import React, { useEffect, useState } from 'react'

const Funcom = () => {
const [x,setX]=useState(0)
const [y,setY]=useState(0)

const hooks=(e)=>
{ 
    console.log("running")
    setX(e.clientX)
    setY(e.clientY)
}
useEffect(()=>
{
    console.log('run')
    window.addEventListener('mousemove',hooks);

},[])


return (
    <div>
        <br/>
        <br/>
        <p>using functional component</p>
        x-{x}
        <br/>
        y-{y}
    </div>
  )
}

export default Funcom