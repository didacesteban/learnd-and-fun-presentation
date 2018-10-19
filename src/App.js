import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';
import nexus from './Nexus_6.png';
import menu from './menu.png';
import screenshots from './screenshots.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleNextStep = this.handleNextStep.bind(this);
    this.handlePreviousStep = this.handlePreviousStep.bind(this);
    this.handleTitleChanges = this.handleTitleChanges.bind(this);
    this.handleDescriptionChanges = this.handleDescriptionChanges.bind(this);
    this.addNewBoldTag = this.addNewBoldTag.bind(this);
    this.addNewUnderlineTag = this.addNewUnderlineTag.bind(this);
    this.addNewItalicTag = this.addNewItalicTag.bind(this);
    this.addNewEmoji = this.addNewEmoji.bind(this);
    this.state = {
      step: 0,
      appTitle: 'Nombres de perros, gatos, mascotas y más animales',
      appDescription: 'Esta es una aplicación que tiene como objetivo ayudarte a encontrar el nombre ideal para tu mascota.'
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

  handleTitleChanges() {
    const title = document.getElementsByName('appTitleInput')[0].value;
    this.setState(() => ({
      appTitle: title
    }));
  }

  handleDescriptionChanges() {
    const description = document.getElementsByName('appDescriptionInput')[0].value;
    this.setState(() => ({
      appDescription: description
    }));
  }

  addNewBoldTag() {
    const description = this.state.appDescription += '<b> your text here </b>';
    this.setState(() => ({
      appDescription:  description
    }));
  }

  addNewUnderlineTag() {
    const description = this.state.appDescription += '<u> your text here </u>';
    this.setState(() => ({
      appDescription:  description
    }));
  }

  addNewItalicTag() {
    const description = this.state.appDescription += '<i> your text in bold here </i>';
    this.setState(() => ({
      appDescription:  description
    }));
  }

  addNewEmoji() {
    const description = this.state.appDescription += '😎';
    this.setState(() => ({
      appDescription:  description
    }));
  }


  render() {
    return (
      <div className="App">

        {this.state.step < 8 ? (<div className="button-left" onClick={this.handlePreviousStep}></div>) : ''}

        {this.state.step < 8 ? (<div className="button-right" onClick={this.handleNextStep}></div>) : ''}

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
            ¿Cómo se escribe HTML?
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
              &lt;u&gt;
              <br/>
                <span className="margin-mark-u">
                  <u>subrayado</u>
                </span>
                <br/>
                <span className="margin-mark-b">
                  &lt;b&gt;
                </span>
                <br/>
                  <span className="margin-mark-text">
                    <u><b> negrita y subrayado </b></u>
                  </span>
                <br/>
                <span className="margin-mark-b">
                  &lt;/b&gt;
                </span>
                <br/>
                <span className="margin-mark-u">
                  <u>subrayado</u>
                </span>
              <br/>
              &lt;/u&gt;
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
              https://pickaso.com/2016/html-emojis-ficha-app-google-play
          </div>
        </div>) : ''}

        {this.state.step === 8 ? (<div className="Content-split">
          <div className="row">
            <div className="col col-lg-6 col-md-6 text-center">
              <p className="title">
                Playground
              </p>
              <br/>
              <div className="form-group text-left">
                <div className="text-center">
                  <button className="btn btn-info" onClick={this.addNewBoldTag}>
                    <b>B</b>
                  </button>
                  &nbsp;
                  <button className="btn btn-info" onClick={this.addNewUnderlineTag}>
                    <u>U</u>
                  </button>
                  &nbsp;
                  <button className="btn btn-info" onClick={this.addNewItalicTag}>
                    <i>i</i>
                  </button>
                  &nbsp;
                  <button className="btn btn-info" onClick={this.addNewEmoji}>
                    😎
                  </button>
                </div>
                <br/><br/>
                 <label className="title-inputs">
                    Title <span className="characters-counter">{this.state.appTitle.length}/50</span>
                 </label>
                 <input type="text" value={this.state.appTitle} className="form-control" onChange={this.handleTitleChanges} name="appTitleInput" />
               </div>
              <div className="form-group text-left">
                 <label className="title-inputs">
                    Description <span className="characters-counter">{this.state.appDescription.length}/4000</span>
                 </label>
                 <textarea className="form-control" value={this.state.appDescription} rows="7" onChange={this.handleDescriptionChanges} name="appDescriptionInput"></textarea>
               </div>
               <div className="text-center">
                 <button className="btn btn-info">
                   Copy Title to clipboard
                 </button>
                 &nbsp;
                 <button className="btn btn-info">
                   Copy Description to clipboard
                 </button>
               </div>
            </div>
            <div className="col col-lg-6 col-md-6">
              <div className="nexus-container">
                <img src={nexus} className="nexus" />
              </div>
              <div className="nexus-screen">
                <div>
                  <img src={menu} className="menu-image" />
                </div>
                <div className="row app-title-container">
                  <div className="col col-lg-3 col-md-3">
                    <img src="https://lh3.googleusercontent.com/fxSiAXDvooor8GdGtlGtwmfT2NFuM9QCtkgh69RIBu4C50idtNGTyrLgaPS3724C8xq4=s360-rw" className="app-icon" />
                  </div>
                  <div className="col col-lg-9 col-md-9 text-left">
                    <span className="app-title" dangerouslySetInnerHTML={{__html: this.state.appTitle}} ></span>
                  </div>
                </div>
                <div>
                  <img src={screenshots} className="screenshots-image" />
                </div>
                <div className="row">
                  <div className="col col-lg-12 col-md-12 text-left app-description-container">
                    <span className="app-description" dangerouslySetInnerHTML={{__html: this.state.appDescription}} ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>) : ''}

      </div>
    );
  }
}

export default App;
