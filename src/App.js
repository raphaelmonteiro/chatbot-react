import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Chatbot from './components/Chatbot';

class App extends Component {
  render() {
    return (
      <div className="conteudo">
        <Header />
        <Home />
        <Chatbot />
        <Footer />
      </div>
    );
  }
}

export default App;
