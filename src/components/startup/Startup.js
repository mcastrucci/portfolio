import React, { Component } from 'react';
import './Startup.css';
import { 
    WELCOME_STARTUP as WELCOME_ES,
    ABOUT_ME_STARTUP as ABOUT_ME_ES,
} from '../resources/lang/Spanish'
import { 
    WELCOME_STARTUP as WELCOME_EN,
    ABOUT_ME_STARTUP as ABOUT_ME_EN,
} from '../resources/lang/English'

import me from './images/me.jpg';

class Startup extends Component {
    
    render (){
        const spanishLang= this.props.lang === 'es';
        const englishLang= this.props.lang === 'en';
        return (
            <header className="startup">
                    <div className="startup__blur"></div>
                    <div className="startup__container">
                            <h2>{englishLang ? WELCOME_EN : (spanishLang) ? WELCOME_ES: "no translation"}</h2>
                            <p>{englishLang ? ABOUT_ME_EN : (spanishLang) ? ABOUT_ME_ES: "no translation"}</p>
                            <img src={me} alt="me"></img>
                    </div>
            </header>
        );
    }
}

export default Startup;