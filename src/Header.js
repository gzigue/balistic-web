import React, { Component } from 'react';
import logoBack from './images/5.png';
import logoMiddle from './images/logo-estatico-fundo.png';
import logoFront from './images/3.png';
import logo from './images/logo-estatico.png';
import './App.css';

class Header extends Component {

    render() {
        return (
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <img src={logoBack} className="App-logo-back" alt="logo-back" />
                {/*<img src={logoMiddle} className="App-logo-middle" alt="logo-middle" />*/}
                <img src={logoFront} className="App-logo-front" alt="logo-front" />
                <div style={{marginTop: '30%'}}>
                    <h1>Balistic Fitness</h1>
                    <h2>O primeiro aplicativo voltado para o TAF do Brasil!</h2>
                </div>
                {/*<p>
                    Quer impressionar sua tia chata passando em um concurso público?
                </p>*/}
 	    </header>
        )};
} 

export default Header;
