import React, { Component } from 'react';
import Header from '../shared/components/layout/Header'

// Layout Components
import Home from './Home/Home'
import Content from '../shared/components/layout/Content'
import Footer from '../shared/components/layout/Footer'

// Components 
import Todo from './Todo/Todo'
import Timer from './Pomodoro/Timer'
import Coins from './Coins/Coins'
import Notes from './Notes/Notes'

import './App.css';
import { notes1, notes2 } from './Notes/data'
class App extends Component {
  constructor(){
    super()
    this.state = {
      notes: notes1
    }
  }

  componentDidMount(){
	setTimeout(() => { 
		this.setState({
			notes: [ ...this.state.notes, ...notes2 ]
		})
	}, 10000)
  }

  render() {
    return (
      <div className="App">
        <Header title="Welcome to React CookBook Practice" />

        <Content>
          <Todo />
          <Timer />
          <Coins />
          <Notes notes={this.state.notes} />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
