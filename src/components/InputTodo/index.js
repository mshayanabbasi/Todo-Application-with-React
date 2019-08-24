


import React from 'react';


const Input = (props) => {
    const { handleChange, addTodo } = props
    return (
        <div>

            <input
                name="title"
                onChange={handleChange}
                type="text" placeholder=" input data"
            />
            <input type="submit"
                onClick={addTodo}
            />
        </div>
    )
}

export default Input
