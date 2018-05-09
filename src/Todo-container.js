import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import { Todo } from './Todo';

class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todos: [ { text: 'Add your first todo' } ]
        }
    }
    componentDidUpdate(prevProps, prevState){
        const { todos: prevTodos } = prevState;
        const { todos } = this.state;
        if ( prevTodos.length !== todos.length ) {
            // TODO set the counter via props
            document.querySelector('#counter').innerText = todos.length;
        }
    }

    handleChange(event){
        this.setState({ todo: event.target.value });
    }

    handleClickAdd(){
        const { todo, todos } = this.state;
        todo && this.setState({ todos: [ ...todos, { text: todo } ] });
    };

    handleClickDelete(index) {
        console.log(`Deleting todo number ${index}`);
        const { todos } = this.state;
        this.setState({ todos: [
            ...todos.slice(0, index),
            ...todos.slice(index + 1)
        ]});
    }

    renderTodos(){
        const { todo, todos } = this.state;
        if(todos.length > 0) {
            return todos.map((todo, index) =>
                <Todo
                    key={todo.id}
                    onClickDelete={() => this.handleClickDelete(index)}
                    text={todo.text}
                />)
        }
    }

    render() {
        this.state.todos.forEach((todo, index) => {
            this.state.todos[index] = { ...todo, id: uniqueId() };
        });
        const { todo, todos } = this.state;
        return (
            <div className="todo-list">
                <h1>todos</h1>
                <p><span id="counter">1</span> remaining</p>
                <div>{this.renderTodos()}</div>
                <div className="todo-input">
                    <input onChange={(e) => this.handleChange(e)} placeholder="..." type="text" value={todo}/>
                    <button onClick={(e) => this.handleClickAdd(e)}>Add</button>
                </div>
            </div>
        )
    }

}

export default TodoContainer;
