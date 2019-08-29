import React from 'react';
import './style.css'
const Input = (props) => {
    const { handleChange, addTodo } = props
    return (
       
        
        <div className="inputContainer">
        
            <input className="inputTodo"
                name="title"
                onChange={handleChange}
                placeholder="Enter Todo"
                type="text"
            />   
            <input className="inputbtn"
                type="submit"
                onClick={addTodo}
            />
            

        
        </div>
    )
}
export default Input