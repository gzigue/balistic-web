import React, { Component } from 'react';
import logo from './logo_n2.jpg';
import './App.css';

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Balistic Fitness</h1>
                <h2>
                    O primeiro aplicativo voltado para o TAF do Brasil!
                </h2>
                {/*<p>
                    Quer impressionar sua tia chata passando em um concurso público?
                </p>*/}
 	    </header>
        )};
} 

export default Header;
