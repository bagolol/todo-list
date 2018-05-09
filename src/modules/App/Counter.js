import React, { Component } from 'react';

export const Counter = (props) => {
    return (
        <p><span id="counter">{props.count}</span> remaining</p>
    );
}


