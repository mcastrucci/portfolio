import React, { Component } from 'react';
import cynMax from './images/cyn_max2.jpg';
import emma1 from './images/emma1.jpg';
import './About.css';
import { 
    ABOUT_ME_TEXT as ABOUT_ME_TEXT_ES,
    ABOUT_ME_DESCRIPTION as ABOUT_ME_DESCRIPTION_ES,
    ABOUT_ME_DESCRIPTION_2 as ABOUT_ME_DESCRIPTION_2_ES,
    ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_TITLE as ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_TITLE_ES,
    ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION as ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_ES,
    ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_IGT as ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_IGT_ES,
    ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_FREELANCER as ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_FREELANCER_ES
    
} from '../resources/lang/Spanish'
import { 
    ABOUT_ME_TEXT as ABOUT_ME_TEXT_EN,
    ABOUT_ME_DESCRIPTION as ABOUT_ME_DESCRIPTION_EN,
    ABOUT_ME_DESCRIPTION_2 as ABOUT_ME_DESCRIPTION_2_EN,
    ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_TITLE as ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_TITLE_EN,
    ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION as ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_EN,
    ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_IGT as ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_IGT_EN,
    ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_FREELANCER as ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_FREELANCER_EN

} from '../resources/lang/English'

import ReactGA from 'react-ga';

class About extends Component {
    
    componentDidMount(){
        ReactGA.pageview('/about-me');
    }

    render (){
        const spanishLang= this.props.lang === 'es';
        const englishLang= this.props.lang === 'en';
        return (
            <div className="about">
                <h2>{englishLang ? ABOUT_ME_TEXT_EN : (spanishLang) ? ABOUT_ME_TEXT_ES: "no translation"}</h2>
                <div className="about__description">
                    <p>{englishLang ? ABOUT_ME_DESCRIPTION_EN : (spanishLang) ? ABOUT_ME_DESCRIPTION_ES: "no translation"}</p>
                </div>
                <div className="about__text-picture" >
                    <img src={cynMax} alt="me and my wife"></img>

                    <div className="about__text__description--2">
                        <p>{englishLang ? ABOUT_ME_DESCRIPTION_2_EN : (spanishLang) ? ABOUT_ME_DESCRIPTION_2_ES: "no translation"}</p>
                        <h3>{englishLang ? ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_TITLE_EN : (spanishLang) ? ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_TITLE_ES: "no translation"}</h3>
                        <p>{englishLang ? ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_EN : (spanishLang) ? ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_ES: "no translation"}</p>
                    </div>
                </div>

                <div className="about__text-picture--2" >
                    <div className="about__text__description--2">
                        <p>{englishLang ? ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_IGT_EN : (spanishLang) ? ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_IGT_ES: "no translation"}</p>
                    </div>
                    
                    <img src={emma1} alt="me and Emma"></img>
                </div>

                <div className="about__text-picture--3" >
                    <div className="about__text__description--3">
                        <h3>Frelancer</h3>
                        <p>{englishLang ? ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_FREELANCER_EN : (spanishLang) ? ABOUT_ME_DESCRIPTION_2_PROFESSIONAL_DESCRIPTION_FREELANCER_ES: "no translation"}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;