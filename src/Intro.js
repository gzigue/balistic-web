import React, { Component } from 'react';
import './App.css';
import { Player } from 'video-react';

class Intro extends Component {

    render() {
        return (
            <div>
                <br/>
                <p className="introText">
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                    Lorem ipsum whatever Lorem ipsum whatever Lorem ipsum whatever 
                </p>
                <br/>
                <br/>
            </div>
        )};
    
    handleClick() {
        alert("Yo, dawg!");
    }
} 

export default Intro;