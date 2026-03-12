import React from 'react'

const Input = ({ type, name, value, placeholder, onChange }) => {
   
    return (
        <div>
            <input type={type} name={name} value={value} placeholder={placeholder} className='border px-2 py-1 rounded-md' onChange={onChange}/>
        </div>
    )
}

export default Input