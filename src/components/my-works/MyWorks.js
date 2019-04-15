import React, { Component } from 'react';
import './MyWorks.css';


import { 
    MY_WORKS_TITLE as MY_WORKS_TITLE_ES,
    MY_WORKS_REIKI_DESCRIPTION as MY_WORKS_REIKI_DESCRIPTION_ES,
    MY_WORKS_OMNIFOOD_DESCRIPTION as MY_WORKS_OMNIFOOD_DESCRIPTION_ES,
    MY_WORKS_SMARTBRAIN_DESCRIPTION as MY_WORKS_SMARTBRAIN_DESCRIPTION_ES,
} from '../resources/lang/Spanish'
import { 
    MY_WORKS_TITLE as MY_WORKS_TITLE_EN,
    MY_WORKS_REIKI_DESCRIPTION as MY_WORKS_REIKI_DESCRIPTION_EN,
    MY_WORKS_OMNIFOOD_DESCRIPTION as MY_WORKS_OMNIFOOD_DESCRIPTION_EN,
    MY_WORKS_SMARTBRAIN_DESCRIPTION as MY_WORKS_SMARTBRAIN_DESCRIPTION_EN,
} from '../resources/lang/English'

class MyWorks extends Component {
    
    render (){
        const spanishLang= this.props.lang === 'es';
        const englishLang= this.props.lang === 'en';
        return (
            <div className="my-works">
                    <h1>{englishLang ? MY_WORKS_TITLE_EN : (spanishLang) ? MY_WORKS_TITLE_ES: "no translation"}</h1>
                    <div className="my-works__iframes">
                        <div className="my-works__work-card">
                            <a href="http://www.reikiusuiterapia.com">Reiki Usui Terapia</a>
                            <iframe className="my-works" title="reikiusui" src="http://www.reikiusuiterapia.com" frameBorder="0"></iframe>
                            <p>
                                {englishLang ? MY_WORKS_REIKI_DESCRIPTION_EN : (spanishLang) ? MY_WORKS_REIKI_DESCRIPTION_ES: "no translation"}
                            </p>
                        </div>
                        <div className="my-works__work-card">
                            <a href="http://dev-omnifood.pantheonsite.io/">Omnifood</a>
                            <iframe className="my-works" title="omnifood" src="http://dev-omnifood.pantheonsite.io/" frameBorder="0"></iframe>
                            <p>
                            {englishLang ? MY_WORKS_OMNIFOOD_DESCRIPTION_EN : (spanishLang) ? MY_WORKS_OMNIFOOD_DESCRIPTION_ES: "no translation"}
                            </p>
                        </div>
                        <div className="my-works__work-card">
                            <a href="https://smart-brain-fe-m.herokuapp.com/">Smart Brain</a>
                            <iframe className="my-works" title="smart-brain" src="https://smart-brain-fe-m.herokuapp.com/" frameBorder="0"></iframe>
                            <p>
                                {englishLang ? MY_WORKS_SMARTBRAIN_DESCRIPTION_EN : (spanishLang) ? MY_WORKS_SMARTBRAIN_DESCRIPTION_ES: "no translation"}
                            </p>
                        </div>
                    </div>
            </div> 
        );
    }
}

export default MyWorks;