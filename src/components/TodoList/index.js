
import React from 'react';

import ListItem from '../ListITem'


const List = (props) => {


    const { todos, deleteTodo, isEdit, handleUpdate, handleChange, title, updateTitle } = props
    return (
        <div>
            {todos && todos.map((item, i) => {
                return (
                    <ListItem
                        isEdit={isEdit}
                        title={title}
                        index={i}
                        
                        handleUpdate={handleUpdate}
                        deleteTodo={deleteTodo}

                        item={item}
                    />
                )
            }

            )}
        </div>
    )
}
export default List