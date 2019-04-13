import React, { Component } from 'react';
import './StaticHeader.css'
import LangSelector from '../../lang-selector/LangSelector';
import Social from '../social/Social';

class StaticHeader extends Component {
    
    render (){
        return (
            <div className="header__static"> 
                        <div className="header__name"><h1>Maximiliano Castrucci</h1></div>
                        <LangSelector lang={this.props.lang} togleLang={this.props.togleLang}/>
                        <Social/>
                </div>
        );
    }
}

export default StaticHeader;