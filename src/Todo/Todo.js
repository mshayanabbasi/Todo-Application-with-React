import React, { Component } from 'react'
import Input from '../Input/Input'
import './Todo.css'

class Todo extends Component {
  state = {
    todos: [],
    title: '',
    description: '',
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  addTodo = (event) => {
    event.preventDefault()
    const { title, description, todos } = this.state
    const todoObj = {
      title,
      description
    }
    todos.push(todoObj)
    this.setState({ todos })
  }

  deleteTodo = (index) => {
    const {todos} = this.state
    todos.splice(index, 1)
    this.setState({ todos })
  }
  render(){
    const {title, description, todos } = this.state
    return (
      <div>
      <h1>Todo App</h1>
      <form onSubmit={this.addTodo}>
        <Input type="text" value={title}  placeholder="Enter title" name="title" onChange={(event) => (this.onChange(event))} />
        <Input type="text" value={description}  placeholder="Enter description" name="description" onChange={(event) => (this.onChange(event))}/>
        <Input type="submit" value="Submit"/>
      </form>
      <ul>
        {todos.map((val, index) => {
          return <li key={index} className="todo-list">
            <span>
              Title: {val.title}
            </span>
            <span>
              Description: {val.description}
            </span>
            <button className="btn-delete" onClick={() => {this.deleteTodo(index)}}>Delete</button>
          </li>
        })}
      </ul>
      </div>
    )
  }
}

export default Todo
