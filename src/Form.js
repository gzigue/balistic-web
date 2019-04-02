import React, { Component } from 'react';
import logo from './logo.svg';
import './Form.css';

class Form extends Component {

    render() {
        return (
            <div>
                <br/>
                <label id="nome">Nome: </label>
                <input name="nome" type="text" /><br/>
                <label id="email">E-mail: </label>
                <input name="email" type="password"/><br/>
                <br/>
                <label>
                    Se possível, nos conte quais concursos você pretende prestar no futuro:
                </label>
                <br/><br/>
                <textarea className="textBox" name="concursos" id="concursos"/>
                <br/>
                <button onClick={this.handleClick}>Enviar</button>
                <br/>
                <br/>
            </div>
        )};
    
    handleClick() {
        alert("Yo, dawg!");
    }
} 

export default Form;