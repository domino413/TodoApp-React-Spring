import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { withRouter } from 'react-router'
import AuthenticationService from "./AuthenticationService.js"

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

export default withRouter(HeaderComponent)