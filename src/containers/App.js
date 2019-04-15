import React, { Component } from 'react';
import './App.css';
import Home from '../components/home/Home';
import Header from '../components/header/Header';
import Startup from '../components/startup/Startup';
import About from '../components/about-me/About';
import Footer from '../components/footer/Footer';

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
    window.scrollTo(0,0);
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
        <Header lang={language} togleLang={this.onLangChange} onRouteChange={this.onRouteChange}/>
        {
          route === 'home' ?
            <Home onRouteChange={this.onRouteChange} lang={language}/>
          :route === 'about-me' ?
            <About onRouteChange={this.onRouteChange} lang={language}/>
          :
          <div>nothing to see</div>
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
