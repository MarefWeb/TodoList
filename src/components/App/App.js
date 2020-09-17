import React, { Component } from 'react'
import Header from '../Header'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'
import AddTodo from '../AddTodo'

import './App.css'

export default class App extends Component {
  lastId = 0;

  state = {
    todos: [],
    searchingFor: '',
    onlyActive: '',
    onlyDone: ''
  };

  createTask = (label) => {
    return {
      label: label,
      isActive: true,
      isImportant: false,
      id: this.lastId++
    }
  };

  addTask = (label) => {
    this.setState(({ todos }) => {
     const newTodo = this.createTask(label);
     const newArr = [...todos, newTodo];

     return {
         todos: newArr
     };
    });
  };

  changedProperty = (id, changedProp) => {
    this.setState(({ todos }) => {
      const newArr = todos.map(todo => {
        if(todo.id === id) {
            let newObj = JSON.parse(JSON.stringify(todo));
            newObj[changedProp] = !todo[changedProp];
            return newObj;
        }
        else {
            return todo;
        }
      });

      return {
        todos: newArr
      };
    });
  };

  deletedTask = (id) => {
    this.setState(({todos}) => {
     const newArr = todos.filter(todo => todo.id !== id);

     return {
       todos: newArr
     };
    });
  };

  changedKeyWords = (keyWords) => {
    this.setState({
      searchingFor: keyWords
    });
  };

  changedFilter = (filterName) => {
    if(filterName === 'all') {
      this.setState({
        onlyActive: false,
        onlyDone: false
      });
    }
    else if(filterName === 'onlyActive'){
      this.setState({
        onlyActive: true,
        onlyDone: false
      })
    }
    else if(filterName === 'onlyDone'){
      this.setState({
        onlyActive: false,
        onlyDone: true
      })
    }
  };

  render() {
    const { todos, searchingFor, onlyActive, onlyDone } = this.state;
    let newTodos = [...todos];

    if(searchingFor.length > 0) {
      newTodos = todos.filter(todo => todo.label.includes(searchingFor))
    }

    if(onlyActive) {
      newTodos = newTodos.filter(todo => todo.isActive === true)
    }

    if(onlyDone) {
      newTodos = newTodos.filter(todo => todo.isActive === false)
    }

    return (
      <div className="app">
        <Header todos={todos} />
        <SearchPanel changedKeyWords={this.changedKeyWords}
                     onlyActive={onlyActive}
                     onlyDone={onlyDone}
                     changedFilter={this.changedFilter} />
        <TodoList todos={newTodos}
                  changedProperty={this.changedProperty}
                  deletedTask={this.deletedTask} />
        <AddTodo addTask={this.addTask} />
      </div>
    );
  }
}