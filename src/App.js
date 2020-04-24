import React, { Component } from 'react'
import Question from './Question'
import 'bulma/css/bulma.min.css'
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
      <div className="section">
      <Question handleRight={this.handleRight} han  dleWrong={this.handleWrong} state={this.state}/>        
      </div>
    )
  }
}

export default App
