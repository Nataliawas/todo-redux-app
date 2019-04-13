import React, { Component } from 'react';
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

class App extends Component {
  render() {
    return (
      <div className="App">
      <TodoList />
      <TodoAdd />
      </div>
    );
  }
}

export default App;
