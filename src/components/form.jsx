import React, { Component } from 'react';
import Logo from './login.png';
 

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment:'',
         textLogin:'Sign In'
      }
    }
    
    handleUsername = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleComment = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }

    handlerSubmit = (event) =>{
        console.log(`${this.state.username} ${this.state.comment}`)
        event.preventDefault()
    }

    changeMessage(){
        this.setState({
            textLogin:'Logout !'
        })
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
            <img src={Logo} alt="React Logo" />
                <div className='d-flex justify-align-center'>
                <h1>{this.state.textLogin}</h1>
                    <h1>Username</h1>
                    <input type='text' value={this.state.username}  onChange={this.handleUsername}/>
                    <h1>Password</h1>
                    <input type='text' value={this.state.comment} onChange={this.handleComment}/>
                </div>
                <div>
                <button type='submit' onClick={() => this.changeMessage()}>submit</button>
                </div>
            </form>
        )
    }
}

export default Form