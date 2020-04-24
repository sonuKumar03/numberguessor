import React, { Component } from "react";

export class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      assumed: null,
      correct: null,
    };
  }
  componentDidMount() {
    this.generateQuestion();
  }
  generateQuestion = () => {
    let questions = [];
    let assumed = 3;
    let correct = 0;
    for (let i = 0; i < 3; i++) {
      let t = Math.floor(Math.random() * 100);
      correct += t;
      assumed += t;
      questions.push(t);
    }
    this.setState({
      ...this.state,
      questions,
      correct,
      assumed,
    });
  };
  forRight = () => {
      if(this.state.assumed===this.state.correct){
          this.props.handleRight();
          window.alert('right')
      }else{
          this.props.handleWrong();
        window.alert('wrong')
      }
      this.generateQuestion();
  };

  forWrong = () => {
    if(this.state.assumed!==this.state.correct){
        this.props.handleRight();
        window.alert('right')
    }else{
        this.props.handleWrong();
        window.alert('wrong')
    }
    this.generateQuestion();

  };
  render() {
    const questions = this.state.questions;
    const assumed = this.state.assumed;
    return (
      <div className="container">
        <div>
          {questions[0]} + {questions[1]} + {questions[2]} = {assumed}
        </div>
        <button onClick={() => this.forRight()} style={{ marginTop: " 8px", marginRight: "8px" }}>Right ?</button>
        <button onClick={() => this.forWrong()} style={{ marginTop: " 8px", marginRight: "8px" }} >Wrong ?</button>
        <button onClick={() => this.generateQuestion()} style={{ marginTop: " 8px", marginRight: "8px" }} >Next Question</button>
        
        <div style={{ marginTop: "8px" }}>
          <p>Your score</p>
          <p>correct :{this.props.state.right}</p>
          <p>wrong : {this.props.state.wrong}</p>
        </div>
      </div>
    );
  }
}

export default Question;
