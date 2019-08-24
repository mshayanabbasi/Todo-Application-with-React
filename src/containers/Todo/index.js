import React, { Component } from 'react'

import { Header, Input, List } from '../../components'
import './style.css'


class Todo extends Component {
    state = {
        todos: [],
        title: '',
        updateTitle: '',
        description: '',
        firstName: '',
        // isEdit: false
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

        // const todoObj = {
        //     title,
        //     description
        // }

        todos.push(title)
        this.setState({ todos })
    }

    deleteTodo = (index) => {
        const { todos } = this.state
        todos.splice(index, 1)
        this.setState({ todos })
    }
    handleUpdate = (i, upateValue) => {
        const { todos } = this.state
        todos[i] = upateValue

        this.setState({
            todos: this.state.todos,
            isEdit: !this.state.isEdit
        })
    }
    render() {
        const { title, description, todos, } = this.state
        console.log('title in render', todos)
        return (
            <div className="main" >

                <Header
                    Title='Todo APP'
                />
                <Input
                    addTodo={this.addTodo}
                    handleChange={this.onChange}
                />
                <List
                    updateTitle={this.state.updateTitle}
                    title={this.state.title}
                    handleChange={this.onChange}
                    handleUpdate={this.handleUpdate}
                    isEdit={this.state.isEdit}
                    deleteTodo={this.deleteTodo}
                    todos={todos}
                />

            </div>
        )
    }
}

export default Todo
