import React from 'react'

import './Header.css'

const Header = ({ todos }) => {
    const active = todos.filter(todo => todo.isActive === true).length;
    const done = todos.filter(todo => todo.isActive === false).length;

    return (
        <div className="header">
          <h1>Todo List</h1>
          <p>{ active } more to do, { done } done</p>
        </div>
    );
};

export default Header