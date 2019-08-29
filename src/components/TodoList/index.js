import React from 'react';
import ListItem from '../ListItem';
import './style.css'

const TodoList = (props) => {
    const { title, todos, isEdit, handleUpdate, deleteTodo } = props
    return (
        <div className="container">
            {todos && todos.map((todo, i) => {
                return (
                    <ListItem 
                        isEdit={isEdit}
                        title={title}
                        index={i}
                        todo={todo}
                        handleUpdate={handleUpdate}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </div>
    )
}
export default TodoList