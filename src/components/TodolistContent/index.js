import React from 'react';
import { useSelector } from 'react-redux';
import TodolistItem from '../TodolistItem';

import './style.css';

function TodolistContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const sortedTodoList = [...todoList];

  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const activeTasksCounting = sortedTodoList.filter((item) => {
    return item.status === 'incomplete';
  });

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    };

    return item.status === filterStatus;
  });

  return (
    <div className='content__wrapper'>
      <p>Active tasks: {activeTasksCounting.length}</p>
      {filteredTodoList && filteredTodoList.length > 0 
      ? filteredTodoList.map((todo) => <TodolistItem key={todo.id} todo={todo} />)
      : <h4>not todo found</h4> }
    </div>
  )
}

export default TodolistContent;
