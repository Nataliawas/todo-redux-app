import React from 'react'
import { connect } from 'react-redux'


class TodoAdd extends React.Component {

    state = { text: '' }

    handleChange = e => {
        const val = e.target.value
        this.setState({
            text: val
        })
    }

    handleClick = () => {
        this.props.addTodo(this.state.text)
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.text} onChange={this.handleChange} />
                <button type="button" required onClick={this.handleClick}>ADD +</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch({
        type: 'ADD_TODO',
        text
    })
})

export default connect(null, mapDispatchToProps)(TodoAdd)