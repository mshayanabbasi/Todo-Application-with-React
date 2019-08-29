import React, { Component } from 'react';
import { Header, Input, TodoList, Footer } from '../../components'
import './style.css'
class Todo extends Component {
    state = { 
        title: '',
        todos: []
     }
     onChange = (event) => {

        const { value, name } = event.target
        console.log(event)
        console.log(value, name)
        this.setState({
            [name]: value
        })
    }
    addTodo = (event) => {
        event.preventDefault()
        const { title, todos } = this.state
        todos.push(title)
        this.setState({
            todos
        })
    }
    deleteTodo = (index) => {
        const {todos} = this.state;
        todos.splice(index, 1)
        this.setState({
            todos
        })
    }
    handleUpdate = (i, updateValue) => {
        const { todos } = this.state
        todos[i] = updateValue
        this.setState({
            todos: this.state.todos,
            isEdit: !this.state.isEdit
        })
    }
    render() { 
        
        return ( 
            <div className="main">
                <Header 
                    Title="Todo App"
                />
                <Input 
                    handleChange={this.onChange}
                    addTodo={this.addTodo}
                />
                <TodoList 
                    title={this.state.title}
                    todos={this.state.todos}
                    updateTitle={this.state.updateTitle}
                    handleChange={this.onChange}
                    handleUpdate={this.handleUpdate}
                    isEdit={this.state.isEdit}
                    deleteTodo={this.deleteTodo}
                />
                <Footer />
            </div>
         )
    }
}
 
export default Todo