import React, { Component } from 'react'

import './AddTodo.css'

export default class AddTodo extends Component {

    state = {
        label: ''
    };

    onChangeLabel = (e) => {
        this.setState({
          label: e.target.value
        });
    };

    onSubmit = (e) => {
        const { addTask } = this.props;
        const { label } = this.state;

        e.preventDefault();
        addTask(label);

        this.setState({
            label: ''
        })
    };

    render() {
        const { label } = this.state;

        return (
            <form className="addTodo" onSubmit={this.onSubmit}>
                <input onChange={this.onChangeLabel} value={label} placeholder="What do you want to plan?" />
                <button>Add</button>
            </form>
        );
    }
}