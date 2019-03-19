import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Fernando'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Jaqueline'
      });
    }, 1000);
  }

  render() {
    return (
      <div className="Home">
        <p>Hi my name is {this.state.name}</p>
      </div>
    );
  }
}

export default Home;
