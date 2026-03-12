import React from 'react'

const Button = ({ name, type }) => {
    return (
        <div>
            <button type={type} className='bg-gray-200 hover:bg-gray-300 cursor-pointer border ml-1 rounded-md px-2 py-1'>{name}</button>
        </div>
    )
}

export default Button