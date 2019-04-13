import React, { Component } from 'react';
import './Header.css';
import StaticHeader from './staticHeader/StaticHeader';
import StickyHeader from './stickyHeader/StickyHeader';


class Header extends Component {
    
    render (){
        return (
            <div className="header">
                <StaticHeader lang={this.props.lang} togleLang={this.props.togleLang}/>
                <StickyHeader lang={this.props.lang} togleLang={this.props.togleLang}/>
            </div>
        );
    }
}

export default Header;