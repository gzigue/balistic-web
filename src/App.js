import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Header from './Header';
import Intro from './Intro';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <body>
          <Intro />
          <Form />
        </body>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
