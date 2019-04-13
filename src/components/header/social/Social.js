import React, { Component } from 'react';

class Home extends Component {
    
    render (){
        return (
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
                                        <i className="fa fa-github" aria-hidden="true"></i>
                                    </a>
                                </li>       
                            </ul>
                        </div>
        );
    }
}

export default Home;