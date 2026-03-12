import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import Task from './components/Task'
import { useContext } from 'react'
import { TodoContext } from '../Contexts/todoContext'


function App() {
  // const [todos, setTodos] = useState([])

  const { todos, dispatch } = useContext(TodoContext) // using use context and making use of useReducer hook

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:3000/todos')
      const data = await response.json()
      console.log(data);

      if (response.ok) {
        dispatch({ type: 'GET_TODOS', payload: data })

      }
    }

    fetchTodos()
  }, [])

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='max-w-7xl'>
        <h1 className='text-center font-bold text-4xl mb-5 uppercase'>todo list</h1>

        <Form />

        {/* tasks list */}
        <div className='mt-8'>
          {
            todos && todos.map((item) =>
              (<Task key={item._id} task={item} />)
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
