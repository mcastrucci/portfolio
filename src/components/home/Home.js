import React, { Component } from 'react';
import './Home.css';
import { 
    WELCOME as WELCOME_ES,
    ABOUT_ME as ABOUT_ME_ES,
    ABOUT_ME_BUTTON as ABOUT_ME_BUTTON_ES,
    RESUME_BUTTON as RESUME_BUTTON_ES,
    SEE_WORKS as SEE_WORKS_ES,
    ABOUT_ME_RESUME as ABOUT_ME_RESUME_ES,
    SEE_WORKS_RESUME as SEE_WORKS_RESUME_ES,
    RESUME_RESUME as RESUME_RESUME_ES,
} from '../resources/lang/Spanish'
import { 
    WELCOME as WELCOME_EN,
    ABOUT_ME as ABOUT_ME_EN,
    ABOUT_ME_BUTTON as ABOUT_ME_BUTTON_EN,
    RESUME_BUTTON as RESUME_BUTTON_EN,
    SEE_WORKS as SEE_WORKS_EN,
    ABOUT_ME_RESUME as ABOUT_ME_RESUME_EN,
    SEE_WORKS_RESUME as SEE_WORKS_RESUME_EN,
    RESUME_RESUME as RESUME_RESUME_EN,
} from '../resources/lang/English'

import me from './images/me.jpg';

class Home extends Component {
    
    render (){
        const spanishLang= this.props.lang === 'es';
        const englishLang= this.props.lang === 'en';
        return (
            <header className="home">
                <div className="home__left-panel">
                    <div className="home__left-panel__center">
                            <h2>{englishLang ? WELCOME_EN : (spanishLang) ? WELCOME_ES: "no translation"}</h2>
                            <p>{englishLang ? ABOUT_ME_EN : (spanishLang) ? ABOUT_ME_ES: "no translation"}</p>
                            <img src={me} alt="me"></img>
                    </div>
                    
                </div>

                    <div className="home__right-panel">
                            <div className="home__right-panel__box home__right-panel__sc1">
                                <p>
                                    {englishLang ? ABOUT_ME_RESUME_EN : (spanishLang) ? ABOUT_ME_RESUME_ES: "no translation"}
                                </p>
                                <h2 className="home__button">{englishLang ? ABOUT_ME_BUTTON_EN : (spanishLang) ? ABOUT_ME_BUTTON_ES: "no translation"}</h2>
                            </div>
                            <div className="home__right-panel__box home__right-panel__sc2">
                                <p>
                                    {englishLang ? SEE_WORKS_RESUME_EN : (spanishLang) ? SEE_WORKS_RESUME_ES: "no translation"}
                                </p>
                                <h2 className="home__button">{englishLang ? SEE_WORKS_EN : (spanishLang) ? SEE_WORKS_ES: "no translation"}</h2>
                            </div>
                            <div className="home__right-panel__box home__right-panel__sc3">
                                <p>
                                    {englishLang ? RESUME_RESUME_EN : (spanishLang) ? RESUME_RESUME_ES: "no translation"}
                                </p>
                                <h2 className="home__button">{englishLang ? RESUME_BUTTON_EN : (spanishLang) ? RESUME_BUTTON_ES: "no translation"}</h2>
                            </div>
                    
                    </div>

            </header>
        );
    }
}

export default Home;