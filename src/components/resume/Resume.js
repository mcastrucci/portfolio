import React, { Component } from 'react';
import './Resume.css';

class Resume extends Component {
    
    render (){
        return (
            <div className="resume">
                    <iframe className="resume__iframe" src="https://drive.google.com/embeddedfolderview?id=1UxznRGpdso0SZ2KwxRaKyEOl06-2Y-TE#list" width="600" height="500" frameBorder="0"></iframe>
            </div> 
        );
    }
}

export default Resume;