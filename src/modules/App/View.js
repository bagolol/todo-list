import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import { Todo } from './Todo';
import { Counter } from './Counter';

export const View = (props) => {
        return (
            <div className="todo-list">
                <h1>props.todos</h1>
                <Counter count={props.todos.length}/>
                <div>{renderTodos(props)}</div>
                <div className="todo-input">
                    <input
                        onChange={props.handleChange}
                        placeholder="..."
                        type="text"
                        value={props.todo}
                    />
                    <button
                        onClick={props.handleClickAdd}
                    >Add
                    </button>
                </div>
            </div>
        )
}

const renderTodos = (props) => {
    if(props.todos.length > 0) {
        return props.todos.map((todo, index) =>
            <Todo
                key={uniqueId()}
                onClickDelete={() => props.handleClickDelete(index)}
                text={todo.text}
            />)
    }
}
