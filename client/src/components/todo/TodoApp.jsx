import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AuthenticatedRoute from "./AuthenticatedRoute.jsx"
import "/Users/captain/Desktop/udemy/todo-app/client/src/App.css"
import "/Users/captain/Desktop/udemy/todo-app/client/src/components/assets/bootstrap.css"
import HeaderComponent from "./HeaderComponent.jsx"
import FooterComponent from "./FooterComponent.jsx"
import LoginComponent from "./LoginComponent.jsx"
import WelcomeComponent from "./WelcomeComponent.jsx"
import TodoComponent from "./TodoComponent.jsx"
import LogoutComponent from "./LogoutComponent.jsx"
import ErrorComponent from "./ErrorComponent.jsx"

class TodoApp extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/login" exact component={LoginComponent} />
                        <AuthenticatedRoute path="" component={WelcomeComponent} />
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

export default TodoApp