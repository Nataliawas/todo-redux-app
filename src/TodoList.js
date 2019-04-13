import React from 'react'
import { connect } from 'react-redux'
import { loadTodos, addTodo, deleteTodo } from './store/todo'
export class TodoList extends React.Component {

    componentDidMount() {
        this.props.loadTodos()
    }
    render() {
        return (

            <div>
                {this.props.todos && this.props.todos.map(todo => (
                    <div>
                    <span>{todo.text}</span>
                    <button type="button" onClick={()=>this.props.deleteTodo(todo.id)}>X</button>
                    </div>
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
    deleteTodo: id => dispatch(deleteTodo(id))

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)