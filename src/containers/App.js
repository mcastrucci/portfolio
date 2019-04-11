import React, { Component } from 'react';
import './App.css';
import Home from '../components/home/Home';
import Header from '../components/header/Header';

class App extends Component {
  constructor(){
    super();
    this.state= {
      route: "home",
      language: "en"
    }
  }

  onRouteChange = (newRoute) => {
    this.setState({route: newRoute});
  }

  onLangChange = (newLang) =>{
    this.setState({language: newLang});
  }

  render() {
    const route = this.state.route;
    const language = this.state.language;
    return (
      <div className="App">
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
