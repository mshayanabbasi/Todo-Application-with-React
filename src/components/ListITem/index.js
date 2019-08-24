
import React, { Component } from 'react';



class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updateTitle: props.title,
            isEdit: false
        }

    }

    handleChange = (e) => {
        const { value } = e.target
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
        const { item, handleUpdate, deleteTodo, } = this.props
        const {
            updateTitle
        } = this.state
        return (
            <div>
                <div style={{
                    display: 'flex'
                    , backgroundColor: 'green',
                    borderRadius: 10, width: 200,
                    justifyContent: 'space-between',
                    padding: 10,
                    margin: 5
                }}
                >

                    {
                        this.state.isEdit ?
                            <input type="text"
                                value={updateTitle}
                                name="updateTitle"
                                onChange={this.handleChange}
                            />


                            :
                            <p >
                                {item}
                            </p>
                    }

                    <button
                        onClick={() => deleteTodo()}
                    >
                        delete
                        </button>
                    <button
                        onClick={this.handleSave}
                    >
                        Update
                            </button>
                </div>


            </div>

        )
    }
}

export default ListItem

