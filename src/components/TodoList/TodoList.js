import React from 'react'
import TodoItem from '../TodoItem'

import './TodoList.css'

const TodoList = ({ todos, changedProperty, deletedTask }) => {
  let todoListContent = todos.map(todo => {
    const { id, ...attr } = todo;

    return <TodoItem {...attr} key={id}
                     changedActivity={() => changedProperty(id, 'isActive')}
                     changedImportance={() => changedProperty(id, 'isImportant')}
                     deletedTask={() => deletedTask(id)}
    />
  });

  if(todos.length < 1) {
    todoListContent = <p className="nothingTodo">Nothing to do.<br/>You can add your tasks below.</p>
  }

  return (
    <div className="todoList">
      { todoListContent }
    </div>
  );
};

export default TodoList