import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { useContext } from 'react'
import { TodoContext } from '../../Contexts/todoContext'

const Form = () => {
    const [text, setText] = useState("")
    const [error, setError] = useState(null)
    const { dispatch } = useContext(TodoContext) // using use context and making use of useReducer hook

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('https://todo-list-hf1o.onrender.com/todos', {
            method: 'POST',
            body: JSON.stringify({ task: text }), // since backend expects obj. instead of string, wrap text inside braces
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()

        if (!response.ok) {
            setError(data.error)
            console.log(data.error);
        }

        if (response.ok) {
            setError(null)
            setText("")
            dispatch({ type: 'CREATE_TODO', payload: data.data })
        }
    }

    return (
        <form className='mb-5 relative' onSubmit={handleSubmit}>
            <div className='flex'>
                <Input type="text" placeholder="enter task" onChange={handleChange} name='todo' value={text} />
                <Button type='submit' name="Submit" />
            </div>
            {error && <div className='text-red-600 absolute ml-13'>{error}</div>}
        </form>
    )
}

export default Form