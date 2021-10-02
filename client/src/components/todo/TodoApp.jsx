import React, { Component } from "react"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import AuthenticationService from "./AuthenticationService.js"
import AuthenticatedRoute from "./AuthenticatedRoute.jsx"
import "/Users/captain/Desktop/udemy/todo-app/client/src/App.css"
import "/Users/captain/Desktop/udemy/todo-app/client/src/components/assets/bootstrap.css"

class TodoApp extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/login" exact component={LoginComponent} />
                        <AuthenticatedRoute path="/welcome" component={WelcomeComponent} />
                        <AuthenticatedRoute path="/todos" component={TodoComponent} />
                        <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                        <Route component={ErrorComponent} />
                        {/* <Route path="" component={} /> */}
                    </Switch>
                    <FooterComponent />
                </BrowserRouter>
            </div>
        )
    }
}

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

        console.log(isUserLoggedIn)

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="" className="navbar-brand">TOMS</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li className="nav-link muted"><Link to="/welcome">Home</Link></li>}
                        {isUserLoggedIn && <li className="nav-link muted"><Link to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li className="nav-link muted"><Link to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="text-muted">All rights reserved 2021</span>
            </footer>
        )
    }
}

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

class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div className="container">
                    <p>This is the Dashboard to your Task Oriented Management System.</p>
                </div>
                
            </div>
        )
    }
}

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos : [
                {id : 1, description : "Learn React", done : false, targetDate : new Date()},
                {id : 2, description : "Become Expert", done : false, targetDate : new Date()},
                {id : 3, description : "Visit Tahoe", done : false, targetDate : new Date()}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>Complete?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map (
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                            <td>{todo.done.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

class LogoutComponent extends Component {
    render () {
        return (
            <div>
                <h1>You are logged out</h1>
                <div className="container">
                    Thank you, come again!
                </div>
            </div>
        )
    }
}

function ErrorComponent() {
    return <div><h1>404</h1><h3>An error has occurred.</h3><p>Please check the URL link or contact support at 123-456-7890.</p></div>
}

export default TodoApp