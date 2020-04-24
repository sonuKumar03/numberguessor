import React, { Component } from 'react'
import Question from './Question'
export class App extends Component {
constructor(props){
  super(props)
  this.state = {
    right:0,
    wrong:0
  }
}
handleRight = ()=>{
  this.setState({
   ...this.state ,
   right:this.state.right+1
  })
}
handleWrong = ()=>{
  this.setState({
   ...this.state ,
   wrong:this.state.wrong+1
  })
}
  render() {
    return (
      <div className="container">
      <Question handleRight={this.handleRight} handleWrong={this.handleWrong} state={this.state}/>        
      </div>
    )
  }
}

export default App
