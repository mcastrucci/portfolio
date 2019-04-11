import React, { Component } from 'react';
import './Header.css';
import { 
    ENGLISH as ENGLISH_ES,
    SPANISH as SPANISH_ES,
} from '../resources/lang/Spanish'
import { 
    ENGLISH as ENGLISH_EN,
    SPANISH as SPANISH_EN,
} from '../resources/lang/English'

class Header extends Component {
    
    render (){
        const spanishLang= this.props.lang === 'es';
        const englishLang= this.props.lang === 'en';
        return (
            <div className="header">
                <div className="header__static"> 
                        <div className="header__name"><h1>Maximiliano Castrucci</h1></div>
                        <div className="header__togle-lang">
                            <h2 className={spanishLang ? "header__togle-lang__en header__togle-lang--disable--left" : "header__togle-lang__en header__togle-lang--enable--left"} onClick={ ()=>this.props.togleLang("en")}>{englishLang ? ENGLISH_EN : (spanishLang) ? ENGLISH_ES: "no translation"} </h2>
                            <h2 className={englishLang ? "header__togle-lang__en header__togle-lang--disable--right" : "header__togle-lang__en header__togle-lang--enable--right"} onClick={ ()=>this.props.togleLang("es")}>{englishLang ? SPANISH_EN : (spanishLang) ? SPANISH_ES: "no translation"} </h2>
                        </div>
                        <div className="header__social">
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/maximiliano-castrucci-b1408b96/" >
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.facebook.com/maximiliano.castrucci" >
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>  

                                <li>
                                    <a href="https://github.com/mcastrucci" >
                                        <i class="fa fa-github" aria-hidden="true"></i>
                                    </a>
                                </li>       
                            </ul>
                        </div>
                </div>
                <div className="header__sticky">
                    <div className="header__name"><h1>Maximiliano Castrucci</h1></div>
                    <div className="header__togle-lang">
                            <h2 className={spanishLang ? "header__togle-lang__en header__togle-lang--disable--left" : "header__togle-lang__en header__togle-lang--enable--left"} onClick={ ()=>this.props.togleLang("en")}>{englishLang ? ENGLISH_EN : (spanishLang) ? ENGLISH_ES: "no translation"} </h2>
                            <h2 className={englishLang ? "header__togle-lang__en header__togle-lang--disable--right" : "header__togle-lang__en header__togle-lang--enable--right"} onClick={ ()=>this.props.togleLang("es")}>{englishLang ? SPANISH_EN : (spanishLang) ? SPANISH_ES: "no translation"} </h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;