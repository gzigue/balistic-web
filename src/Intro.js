import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';

class Intro extends Component {

    render() {

	const opts = {
      	    height: '270',
      	    width: '480',
      	    playerVars: 
		{ // https://developers.google.com/youtube/player_parameters
            	    autoplay: 1
        	}
    	};
        return (
            <div className="sideBySide">
                <br/>
                <p className="introText">
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                </p>
		<YouTube
		    className='videoLeft'
		    videoId='5ZCgbGgA-_8'
		    opts={opts}
		    onReady={this._onReady}
		/>
                <br/>
                <br/>
            </div>
        )};
    
    _onReady(event) {
	event.target.pauseVideo();
    }
    
} 

export default Intro;
