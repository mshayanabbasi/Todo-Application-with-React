import React, { Component } from 'react';
import './style.css'
class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state ={
            updateTitle: props.title,
            isEdit: false
        }
    }
     handleChange = (event) => {
         const { value } = event.target
         this.setState({
             updateTitle: value
         })
     }
     handleSave = () => {
         const { index } = this.props
         this.setState({
             isEdit: !this.state.isEdit
         })
         this.props.handleUpdate(index, this.state.updateTitle)
     }

    render() { 
        const { todo, deleteTodo } = this.props
        return ( 
            <div className="listContainer">
                <div className="container" style={{
                    display: 'flex'
                    , backgroundColor: 'white',
                    borderRadius: 10, width: 300,
                    justifyContent: 'space-between',
                    padding: 10,
                    margin: 5,
                    flexDirection: "row"                  
                }}>
                    {
                        this.state.isEdit ? 
                        <input className="inputUpdate"
                            type="text"
                            name="updateTitle"
                            onChange={this.handleChange}
                            value={this.state.updateTitle}
                        />
                        : 
                        <p>
                            {todo}
                        </p>
                    }
                    <button className="Updatebtn" onClick={this.handleSave}>Update</button>
                    <button className="Deletebtn" onClick={() => deleteTodo()}>
                        Delete
                    </button>
                </div>
            </div>
         );
    }
}
 
export default ListItem;