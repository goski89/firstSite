import React, { Component } from 'react';
import '../styles/Contact.css'
import { Prompt } from 'react-router-dom'

class Contact extends Component {
    state={
        value: ""
    }

    handleChange= (e)=>{
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            value: ""
        })
    }
    render() {
        return (
            <div className='contact'>
               <form onSubmit={this.handleSubmit}>
                   <h3>Napisz do nas</h3>
                   <textarea value={this.state.value} onChange={this.handleChange} placeholder='Wpisz wiadomość'/>
                   <button>Wyślij</button>
               </form>
               <Prompt
                    when={this.state.value.length > 0 ? true : false}
                    message="Masz niewysłany formularz. Czy napewno chcesz opuścuć tą stronę?"
                />
            </div>
        );
    }
}

export default Contact;