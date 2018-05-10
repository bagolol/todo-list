import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import { View } from './View';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todos: [ { text: 'Add your first todo' } ]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleChange(event){
        this.setState({ todo: event.target.value });
    }

    handleClickAdd(e){
        const { todo, todos } = this.state;
        todo && this.setState({ todos: [ ...todos, { text: todo } ] });
    };

    handleClickDelete(index) {
        const { todos } = this.state;
        this.setState({ todos: [
            ...todos.slice(0, index),
            ...todos.slice(index + 1)
        ]});
    }

    render() {
        const { todo, todos, count } = this.state;
        return (
            <View todo={todo}
                todos={todos}
                handleChange={this.handleChange}
                handleClickAdd={this.handleClickAdd}
                handleClickDelete={this.handleClickDelete}
            />
        )
    }

}

