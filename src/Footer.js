import React, { Component } from 'react';
import './App.css';
import API_CONFIG from './API.js';

class Footer extends Component {

    constructor() {
        super();
        this.state = {
            concursos: [{}],
        }
    }

    concursosList(concursos) {
        let nomes = [];
        
        concursos.forEach(c => {
            console.log(c);
            nomes.push(<li key={c.id}>{c.nome}</li>);
        }); 
        
        return nomes;
    }
    
    render() {

        return (
            <footer className="App-footer">
                <h3>
                    Contato: 
                </h3>
                <p>
                    balisticfitness@gmail.com
                </p>
                <ul>
                    {/*this.concursosList(this.state.concursos)*/}
                </ul>
            </footer>
        )
    };

    componentDidMount() {
        const URL = API_CONFIG.address;
        fetch(URL + "concursos")
            .then(response => response.json())
            .then(data => 
                this.setState({
                    concursos: data
                })
            );
    }
} 

export default Footer;
