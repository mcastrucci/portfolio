import React, { Component } from 'react';
import './LangSelector.css'
import { 
    ENGLISH as ENGLISH_ES,
    SPANISH as SPANISH_ES,
} from '../resources/lang/Spanish'
import { 
    ENGLISH as ENGLISH_EN,
    SPANISH as SPANISH_EN,
} from '../resources/lang/English'

class Home extends Component {
    
    render (){
        const spanishLang= this.props.lang === 'es';
        const englishLang= this.props.lang === 'en';
        return (
            <div className="header__togle-lang">
                <h2 className={spanishLang ? "header__togle-lang__en header__togle-lang--disable--left" : "header__togle-lang__en header__togle-lang--enable--left"} onClick={ ()=>this.props.togleLang("en")}>{englishLang ? ENGLISH_EN : (spanishLang) ? ENGLISH_ES: "no translation"} </h2>
                <h2 className={englishLang ? "header__togle-lang__en header__togle-lang--disable--right" : "header__togle-lang__en header__togle-lang--enable--right"} onClick={ ()=>this.props.togleLang("es")}>{englishLang ? SPANISH_EN : (spanishLang) ? SPANISH_ES: "no translation"} </h2>
            </div>
        );
    }
}

export default Home;