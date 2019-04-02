import React, { Component } from 'react';
import './App.css';

class Intro extends Component {

    render() {
        return (
            <div className="sideBySide">
                <br/>
                <p className="introText">
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                </p>
		<iframe
		    className="videoLeft"
		    src='https://www.youtube.com/embed/5ZCgbGgA-_8'
	            frameBorder='0'
	            allow='autoplay; encrypted-media'
	            allowFullScreen
	            title='video'
		/>
                <br/>
                <br/>
            </div>
        )};
    
} 

export default Intro;
