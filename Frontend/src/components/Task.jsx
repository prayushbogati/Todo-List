import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../../Contexts/todoContext'
// import delIcon from "../assets/images/system-solid-39-trash-hover-trash-empty.svg"

const Task = ({ task }) => {
    const { dispatch } = useContext(TodoContext) // using use context and making use of useReducer hook

    const handleClick = async () => {
        const response = await fetch("http://localhost:3000/todos" + `/${task._id}`, {
            method: "DELETE"
        })
        const data = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_TODO', payload: data.data })
        }
    }
    return (
        <div className='my-2 flex items-center'>
            <h3 className='wrap-break-word w-68 border rounded-sm px-2 py-1'>{task.task}</h3> <lord-icon
                src="https://cdn.lordicon.com/xyfswyxf.json"
                trigger="hover"
                colors="primary:#000000"
                style={{ width: 25, height: 25, cursor: 'pointer' }}
                onClick={handleClick}
            >
            </lord-icon>
        </div>
    )
}

export default Task