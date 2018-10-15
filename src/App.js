import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handlePreviousStep = this.handlePreviousStep.bind(this);
    this.state = {
      step: 0
    };
  }

  handleNextStep() {
    this.setState(prevState => ({
      step: prevState.step + 1
    }));
  }

  handlePreviousStep() {
    this.setState(prevState => ({
      step: prevState.step > 0 ? prevState.step - 1 : 0
    }));
  }

  render() {
    return (
      <div className="App">

        <div className="button-left" onClick={this.handlePreviousStep}></div>

        <div className="button-right" onClick={this.handleNextStep}></div>

        {this.state.step === 0 ? (<div className="Content">
          <p className="title">
            Hola.
          </p>
        </div>) : ''}

        {this.state.step === 1 ? (<div className="Content">
          <p className="title">
            ¿Qué es HTML?
          </p>
          HyperText Markup Language
        </div>) : ''}

        {this.state.step === 2 ? (<div className="Content">
          <p className="title">
            ¿Cómo se usa HTML?
          </p>
          <code>
              &lt;b&gt; <b>negrita</b> &lt;/b&gt;
              &lt;u&gt; <u>subrayado</u> &lt;/u&gt;
              &lt;i&gt; <i>cursiva</i> &lt;/i&gt;
          </code>
        </div>) : ''}

      </div>
    );
  }
}

export default App;
