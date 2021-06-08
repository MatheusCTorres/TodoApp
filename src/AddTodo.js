import React, { Component} from 'react';

class AddTodo extends Component{

    state = {
        content: ""
    }

    handleChange = (e)=>{
        this.setState({
            content: e.target.value
        })
    }

    handleSumit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: "" // will clear after submit
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSumit}>
                <label>Add new todo below:</label>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;