import React, { useState, useCallback, ReactNode, FC } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../../slices/todoSlice';
import Button, { SelectButton } from "../Button";
import TodolistModal from "../TodolistModal";

import "./style.css";

const TodolistHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state: { todo: { filterStatus: string; }; }) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const setModalOpenHandle = () => {
    setModalOpen(true)
  }

  const updateFilter = useCallback((e: { target: { value: string; }; }) => {
    dispatch(updateFilterStatus(e.target.value))
  }, []);

  return (
    <>
      <div className="top">
        <Button variant="primary" onClick={setModalOpenHandle} type={undefined}>
          Add Task
        </Button>
        <SelectButton
          id="status"
          value={filterStatus}
          onChange={(e: any) => updateFilter(e)}
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </SelectButton>
      </div>
      <TodolistModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen} todo={undefined} />
    </>
  );
}

export default TodolistHeader;
