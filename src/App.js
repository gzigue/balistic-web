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
        <Header />
        <body>
          <Intro />
          <Form />
        </body>
        <Footer />
      </div>
    );
  }
}

export default App;
