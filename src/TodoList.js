import React from 'react'
import { connect } from 'react-redux'
export class TodoList extends React.Component {


    // componentDidMount() {
    //     fetch('https://isajfdzl2.firebaseio.com/todos.json')
    //         .then(response = response.json)
    //         .then(data => {
    //             console.log(data)
    //         })
    // }
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

export default connect(mapStateToProps)(TodoList)