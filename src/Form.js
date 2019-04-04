import React, { Component } from 'react';
import logo from './logo.svg';
import './Form.css';

class Form extends Component {

    constructor() {
	super();
	this.state = {
	    nome: "",
	    email: "",
	    concursos: ""
	}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br/>

                <label>Nome: </label>
                <input required
		    name="nome" 
		    id="nome" 
		    value={this.state.nome} 
		    type="text" 
		    onChange={this.handleChange}
		/><br/>

                <label>E-mail: </label>
                <input required 
		    name="email" 
		    id="email" 
		    value={this.state.email} 
		    type="text" 
		    onChange={this.handleChange}
		/><br/>
                
		<br/>
                <label>
                    Se possível, nos conte quais concursos você pretende prestar no futuro:
                </label>
                <br/><br/>
                
		<textarea 
		    className="textBox" 
		    name="concursos" 
		    id="concursos" 
		    value={this.state.concursos} 
		    onChange={this.handleChange}/>
                <br/>

                <button>Enviar</button>
                
		<br/> <br/>

            </form>
        )};
    
    handleClick() {
        alert("Yo, dawg!");
    }

    handleChange(event) {
	const {name, value, type, checked} = event.target;
	type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value });
    }

    handleSubmit() {
	alert(JSON.stringify(this.state));
    }
} 

export default Form;
