import React from 'react';


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    }

    render(){
        return(
            <form onSubmit = {this.submitItem}>
               
                <input
                    type = "text"
                    value = {this.value}
                    name = "item"
                    onChange = {this.handleChanges}
                    placeholder = "Type tasks here"
                    
                />

                <button onClick = {this.addItem}>Add Todo</button>
                
            </form>
        )
    }
}

export default TodoForm;