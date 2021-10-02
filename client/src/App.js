import React, { Component } from 'react';
import TodoApp from './components/todo/TodoApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Login/> */}
        <TodoApp/>
      </div>
    )
  }
}

export default App;
