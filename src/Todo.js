import React, { Component } from 'react';

export const Todo = (props) => {
    return (
        <div className="todo-item">
            {props.text}
            <span onClick={props.onClickDelete}>&times;</span>
        </div>
    );
}

