import React, { Component } from 'react';
import './App.css';

class Intro extends Component {

    render() {
        return (
            <div className="sideBySide">
                <br/>
                <div className="introText">
                    <p>
                        Cinquenta milhões de Brasileiros estão se preparando para concursos públicos. 
                        Contudo, 50% reprova no Teste de Apitidão Física (TAF).
                    </p>
                    <p>    
                        Por isso, Estamos criando o 1° app voltado para o TAF, com cronogramas, 
                        videoaulas e dicas para confiabilidade de sua aprovação.
                    </p>
                    <p>
                        Se quiser ser avisado(a) em primeira mão, assim que o app for lançado, 
                        deixe seu nome e e-mail logo abaixo! =)
                    </p>
                </div>
		        <iframe
		            className="videoRight"
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
