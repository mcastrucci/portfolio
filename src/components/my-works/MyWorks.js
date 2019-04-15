import React, { Component } from 'react';
import './MyWorks.css';

class MyWorks extends Component {
    
    render (){
        return (
            <div className="my-works">
                    <h1>Check some of my works!</h1>
                    <div className="my-works__iframes">
                        <div className="my-works__work-card">
                            <h2>Omnifood</h2>
                            <iframe className="my-works" title="omnifood" src="http://dev-omnifood.pantheonsite.io/" frameBorder="0"></iframe>
                            <p>
                                A good example of Landing page, this is pure CSS, html and Javascript
                            </p>
                        </div>
                        <div className="my-works__work-card">
                            <h2>Reiki Usui Terapia</h2>
                            <iframe className="my-works" title="reikiusui" src="http://www.reikiusuiterapia.com" frameBorder="0"></iframe>
                            <p>
                                Reiki Usui Terapia is a Reiki page with a beautifull front end in React
                            </p>
                        </div>
                        <div className="my-works__work-card">
                            <h2>Smart Brain</h2>
                            <iframe className="my-works" title="smart-brain" src="https://smart-brain-fe-m.herokuapp.com/" frameBorder="0"></iframe>
                            <p>
                                This is a good React example running in Heroku with a server in Express Js and a react FE
                            </p>
                        </div>
                    </div>
            </div> 
        );
    }
}

export default MyWorks;