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
          <div>
              &lt;b&gt; <b>negrita</b> &lt;/b&gt;
              &lt;u&gt; <u>subrayado</u> &lt;/u&gt;
              &lt;i&gt; <i>cursiva</i> &lt;/i&gt;
          </div>
        </div>) : ''}

        {this.state.step === 3 ? (<div className="Content">
          <p className="title">
            ¿Por qué esto está mal?
          </p>
          <div>
              &lt;u&gt; &lt;b&gt; negrita y subrayado &lt;/u&gt; &lt;/b&gt;
          </div>
        </div>) : ''}

        {this.state.step === 4 ? (<div className="Content">
          <p className="title">
            Jerarquía
          </p>
          <div>
              &lt;u&gt; &lt;b&gt; <u><b> negrita y subrayado </b></u>  &lt;/b&gt; &lt;/u&gt;
          </div>
        </div>) : ''}

        {this.state.step === 5 ? (<div className="Content">
          <p className="title">
            Caracteres y símbolos especiales
          </p>
          <div>
            &copy&#59; es decir &copy;
          </div>
        </div>) : ''}

        {this.state.step === 6 ? (<div className="Content">
          <p className="title">
            Emojis
          </p>
          <div>
              🤗 🍻
          </div>
        </div>) : ''}

        {this.state.step === 7 ? (<div className="Content">
          <p className="title">
            Siguiente paso 
          </p>
          <div>
              https://thetool.io/2017/how-to-use-html-emoji-googleplay
          </div>
        </div>) : ''}

      </div>
    );
  }
}

export default App;
