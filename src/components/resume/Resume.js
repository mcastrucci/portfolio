import React, { Component } from 'react';
import './Resume.css';
import ReactGA from 'react-ga';

class Resume extends Component {

    componentDidMount(){
        ReactGA.pageview('/resume');
    }
    
    render (){
        return (
            <div className="resume">
                    <iframe className="resume__iframe" title="Resume" src="https://drive.google.com/embeddedfolderview?id=1UxznRGpdso0SZ2KwxRaKyEOl06-2Y-TE#grid" width="100%" height="500" frameBorder="0"></iframe>
            </div> 
        );
    }
}

export default Resume;