import React from 'react'
import { connect } from 'react-redux'
import {loadTodos, addTodo } from './store/todo'
export class TodoList extends React.Component {

componentDidMount(){
    this.props.loadTodos()
}
    render() {
        return (
            <div>
                {this.props.todos && this.props.todos.map(todo => (
                    <div>{todo.text}</div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state.myTodoReducer
})

const mapDispatchToProps = dispatch => ({
    loadTodos: () => dispatch(loadTodos()),
    
    
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)