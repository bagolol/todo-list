import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import { Todo } from './Todo';
import { Counter } from './Counter';

class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            todos: [ { text: 'Add your first todo' } ]
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
                    key={uniqueId()}
                    onClickDelete={() => this.handleClickDelete(index)}
                    text={todo.text}
                />)
        }
    }

    render() {
        const { todo, todos, count } = this.state;
        return (
            <div className="todo-list">
                <h1>todos</h1>
                <Counter count={todos.length}/>
                <div>{this.renderTodos()}</div>
                <div className="todo-input">
                    <input
                        onChange={(e) => this.handleChange(e)}
                        placeholder="..."
                        type="text"
                        value={todo}
                    />
                    <button
                        onClick={(e) => this.handleClickAdd(e)}
                    >Add
                    </button>
                </div>
            </div>
        )
    }

}

export default TodoContainer;
