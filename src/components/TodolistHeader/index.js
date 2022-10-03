import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../../slices/todoSlice';
import Button, { SelectButton } from "../Button";
import TodolistModal from "../TodolistModal";

import "./style.css";

function TodolistHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value))
  };

  return (
    <>
      <div className="top">
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Add Task
        </Button>
        <SelectButton
          className="status-btn"
          id="status"
          value={filterStatus}
          onChange={(e) => updateFilter(e)}
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </SelectButton>
      </div>
      <TodolistModal type='add' modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}

export default TodolistHeader;
