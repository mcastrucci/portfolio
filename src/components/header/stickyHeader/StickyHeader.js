import React, { Component } from 'react';
import './StickyHeader.css';
import LangSelector from '../../lang-selector/LangSelector';
import Social from '../social/Social';

import { 
    HOME as HOME_ES,
    ABOUT_ME_BUTTON as ABOUT_ME_BUTTON_ES,
    RESUME_BUTTON as RESUME_BUTTON_ES,
    SEE_WORKS as SEE_WORKS_ES,
} from '../../resources/lang/Spanish'
import { 
    HOME as HOME_EN,
    ABOUT_ME_BUTTON as ABOUT_ME_BUTTON_EN,
    RESUME_BUTTON as RESUME_BUTTON_EN,
    SEE_WORKS as SEE_WORKS_EN,
} from '../../resources/lang/English'

class StickyHeader extends Component {
    constructor(){
        super();
        this.state= {
          stickyHasFocus: false,
        }
      }

    togleStickyFocus = () => {
        this.setState({stickyHasFocus: !this.state.stickyHasFocus});
    }

    render (){
        const stickyFocus = this.state.stickyHasFocus;
        const spanishLang= this.props.lang === 'es';
        const englishLang= this.props.lang === 'en';
        return (
            <div className="sticky-header">
                {
                    stickyFocus === false ?
                        <div className= 'sticky-header__grid'>
                            <div className="sticky-header__name"><h1>Maximiliano Castrucci</h1></div>
                            <i className="fa fa-bars" aria-hidden="true" onClick={()=>this.togleStickyFocus()}></i>
                        </div>
                        
                    :
                        <div className="sticky-header__drop-menu">
                            <div className="sticky-header__drop-menu--menu">
                                <h2>MENU</h2>
                                <i className="fa fa-window-close-o" aria-hidden="true" onClick={()=>this.togleStickyFocus()}></i>
                            </div>
                            <LangSelector lang={this.props.lang} togleLang={this.props.togleLang}/>
                            <ul>
                                <li>{spanishLang ? HOME_ES : englishLang ? HOME_EN : 'no translation'}</li>
                                <li>{spanishLang ? ABOUT_ME_BUTTON_ES : englishLang ? ABOUT_ME_BUTTON_EN : 'no translation'}</li>
                                <li>{spanishLang ? SEE_WORKS_ES : englishLang ? SEE_WORKS_EN : 'no translation'}</li>
                                <li>{spanishLang ? RESUME_BUTTON_ES : englishLang ? RESUME_BUTTON_EN : 'no translation'}</li>
                            </ul>
                            <Social/>
                        </div>
                }
            
            </div>
        );
    }
}

export default StickyHeader;