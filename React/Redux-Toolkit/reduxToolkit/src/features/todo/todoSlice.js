import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World"
    }]
}



// Slice (a bigger version of reducer)
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // it contains the properties and the function
        // state gives you the current state (its access)
        // action (data passed) (sometimes you need a value which requires to perform any function so we fonud these values in action)
        // payload is  object in itself contains multiple props

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload
                    ? { ...todo, text: action.payload }
                    : todo
            );
        }


    }
})

export const{addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer

