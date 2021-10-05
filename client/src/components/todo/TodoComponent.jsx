import React, { Component } from "react"

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

export default TodoComponent