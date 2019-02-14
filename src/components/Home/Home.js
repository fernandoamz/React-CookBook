import React, { Component } from 'react'
import './Home.css'

class Home extends Component { 
    constructor(){
        super()
        this.state = {
            name: 'Fernando'
        }
    }

    render(){
        //Style object 
        const buttonStyle = {
            backgroundColor: 'gray',
            border: '1px solid black'
        }

        return(
            <div className="Home">
                <h1>Welcome to CodeJobs</h1>
                <p>
                    In this recipe you will learn how to add styles 
                    to components.
                    <a href="http://youtube.com/codejobs">Codejobs</a>.
                </p>
                <p>
                    <button style={buttonStyle}>click me! </button>
                </p>
            </div>
        )
    }
}

export default Home
