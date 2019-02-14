import React, { Component } from 'react';
import Header from '../shared/components/layout/Header'

// Layout Components
import Home from './Home/Home'
import Content from '../shared/components/layout/Content'
import Footer from '../shared/components/layout/Footer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to React CookBook Practice" />

        <Content>
          <Home />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
