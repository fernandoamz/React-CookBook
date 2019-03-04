import React, { Component } from 'react'
import moment from 'moment'
import './Notes.css'

const FormatTime = 'YYYY-MM-DD HH:mm:ss'

class Notes extends Component{
    constructor(){
        super()
        this.state = {
            lastUpdate: moment().format(FormatTime).toString()
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.notes !== this.props.notes){
            this.setState({
                lastUpdate: moment().format(FormatTime).toString()
            })
        }
    }
    
    render(){

        const { notes } = this.props

        return(
            <div className="Notes">
                <h1>Notes :</h1>
                <ul>
                    {
                        notes.map((note, key) => (
                            <li key={key}>{note.title} - {note.content}</li>    
                        ))
                    }
                </ul>
                <p>Last updated: <strong>{this.state.lastUpdate}</strong></p>
            </div>
        )
    }

    componentWillUnmount(){
        console.log("Hasta la vista baby")
        document.body.style = 'background: black'
        document.getElementById("unmountMessage").style.color = 'white'
    }
}

export default Notes
