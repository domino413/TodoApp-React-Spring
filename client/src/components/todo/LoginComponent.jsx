import React, { Component } from "react"
import AuthenticationService from "./AuthenticationService.js"

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            showSuccessMessage: false,
            showFailedMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    :event.target.value
            }
        )
    }

    loginClicked() {
        if(this.state.username === 'username' && this.state.password === 'password') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            this.setState({showSuccessMessage:true})
            this.setState({showFailedMessage:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({showFailedMessage:true})
        }
    }

    render() {
      return (
        <div>
            {this.state.showFailedMessage && <div className="alert alert-warning">Login Failed</div>}
            User Name: <input type="text" name="username" onChange={this.handleChange} />
            Password: <input type="password" name="password" onChange={this.handleChange} />
            <button onClick={this.loginClicked}>Login</button>
        </div>
      )
    }
}

export default LoginComponent