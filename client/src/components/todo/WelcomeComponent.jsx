import React, { Component } from "react"
import HelloWorldService from "../../api/todo/HelloWorldService.js"

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage : ""
        }
        this.handleResponse = this.handleResponse.bind(this)
    }
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div className="container">
                    <p>This is the Dashboard to your Task Oriented Management System.</p>
                </div>
                <div className="container">
                    Click here to test Spring connection.<br/>
                    <button onClick={this.retrieveWelcomeMessage}>Spring Me</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
                
            </div>
        )
    }
    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldService()
        .then(response => this.handleResponse(response))
        //.catch()
    }

    handleResponse(response) {
        this.setState({welcomeMessage : response.data})
    }
}

export default WelcomeComponent