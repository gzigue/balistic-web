import React, { Component } from 'react';
import logo from './logo_n2.jpg';
import './App.css';

class Header extends Component {

    render() {
        return (
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                <h2>
                    "Seu primo de 15 anos já tem 2 pós-doutorados!"
                </h2>
                <p>
                    Quer impressionar sua tia chata passando em um concurso público?
                </p>
            </div>
        )};
    
    handleClick() {
        alert("Yo, dawg!");
    }
} 

export default Header;