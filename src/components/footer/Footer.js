import React, { Component } from 'react';
import './Footer.css'
import Social from '../header/social/Social';
import reactIcon from './images/react.svg'

class Footer extends Component {
    
    render (){
        return (
                <div className="footer"> 
                        <div className="footer__react">
                            <img src={reactIcon} alt="react"></img>
                            <h3>React</h3>
                        </div>
                        <div>
                            <p>2019 - Diseño y Desarrollo por Maximiliano Castrucci</p>
                        </div>
                </div>
        );
    }
}

export default Footer;