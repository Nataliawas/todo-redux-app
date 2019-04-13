const ADD_TODO ='ADD_TODO'
const FETCH_TODO = 'FETCH_TODO'

let idCounter = 0
const todoReducer = (state = [], action) => {
    switch (action.type) {

        case ADD_TODO:
        const newTodo ={
            id: idCounter++,
            text: action.text
         }
        return [
            ...state, 
            newTodo
        ]
        // case FETCH_TODO:

        default:
        return state
    }
}

export default todoReducer