import React, { Component } from 'react';
import './App.css';
import Home from '../components/home/Home';
import Header from '../components/header/Header';
import Startup from '../components/startup/Startup';

class App extends Component {
  constructor(){
    super();
    this.state= {
      route: "home",
      language: "en",
      languageSelected: false,
    }
  }

  onRouteChange = (newRoute) => {
    this.setState({route: newRoute});
  }

  onLangChange = (newLang) =>{
    this.setState({language: newLang});
  }

  setLanguageSelected = () => {
      this.setState({languageSelected: true});
  }

  render() {
    const route = this.state.route;
    const language = this.state.language;
    const selectLang = this.state.setLanguageSelected;
    const languageSelected = this.state.languageSelected;

    return (
      <div className="App">
        {
          languageSelected === false &&
            <Startup lang={language} togleLang={this.onLangChange} selectLang={selectLang}/>
        }
        <Header lang={language} togleLang={this.onLangChange}/>
        {
          route === 'home' ?
            <Home onRouteChange={this.onRouteChange} lang={language}/>
          :
          <div>nothing to see</div>
        }
      </div>
    );
  }
}

export default App;
