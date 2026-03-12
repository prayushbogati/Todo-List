import React, { useReducer } from 'react'
import { createContext } from 'react'

export const TodoContext = createContext()

export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_TODOS':
            return {
                todos: action.payload
            }
        case 'CREATE_TODO':
            return {
                todos: [action.payload, ...state.todos]
            }
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter(todo => todo._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        todos: []
    })
    return (
        <TodoContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}
