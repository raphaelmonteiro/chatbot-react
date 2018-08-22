import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';


import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Chatbot from './components/Chatbot';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="conteudo">
          <Header />
          <Home />
          <Chatbot />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
