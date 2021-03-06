import React, { Component } from 'react';
import './Form.css';
import API_CONFIG from './API';

class Form extends Component {

    constructor() {
	    super();
	    this.state = {
	        nome: "",
	        email: "",
			concursos: "",
			error: 'none'
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
				/>
				<br/>

                <label>E-mail: </label>
                <input required 
		    		name="email" 
		    		id="email" 
		    		value={this.state.email} 
		    		type="text" 
		    		onChange={this.handleChange}
				/><br/>
                <label style={{color: 'orange', display: this.state.error}}>
					Este e-mail já foi cadastrado
				</label>

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
		    		onChange={this.handleChange}
				/>
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

    handleSubmit(event) {
		var options = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
		  	},
			mode: 'cors',
			cache: 'default',
			body:  JSON.stringify({
				nome: this.state.nome,
				email: this.state.email,
				concursos: this.state.concursos
			})
		};

		var request = new Request(API_CONFIG.address + 'usuariosinteressados', options);

		fetch(request).then(response => {
			if (response.status === 422) {
				this.setState({error: 'block'})
			}
            return response;
        }).then(function(json) {
        	console.log(json.errors);
        }).catch(function(err) {
        	console.log("Error " + err);
		});

		event.preventDefault();
    };
	
	
	
}

export default Form;
