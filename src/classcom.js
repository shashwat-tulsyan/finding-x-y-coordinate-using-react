import React, { Component } from 'react'

class Classcom extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
 Hhhook=e=>
 {
    this.setState({
        x:e.clientX,
        y:e.clientY
    })
 }
     
 componentDidMount()
 {
     window.addEventListener('mousemove',this.Hhhook);
}

  render(){    
    return (
      <>
      <p>using class component</p>
      X-{this.state.x}
      <br/>
      Y-{this.state.y}
      </>
    )
  }
}
export default Classcom