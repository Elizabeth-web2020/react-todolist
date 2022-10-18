import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addTodo, updateTodo } from "../../slices/todoSlice";
import Button from "../Button";

import "./style.css";

const TodolistModal = ({ type, modalOpen, setModalOpen, todo }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    };
  }, [type, todo, modalOpen])

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (title === '') {
      toast.error('Please enter a title');
      return;
    };

    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
          id: uuid(),
          title,
          status,
          time: new Date(),
        })
        );
        toast.success('Task Added Successfully');
      };

      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({
            ...todo, 
            title,
            status
          }))
        } else {
          toast.error('No Changes Made')
        };
      };

      setModalOpen(false);
    };
  });

  return (
    modalOpen && (
      <div className="wrapper">
        <div className="content">
          <div
            className="closeButton"
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
            tabIndex={0}
            role="button"
          >
            X
          </div>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="formTitle">{type === 'update' ? 'Update' : 'Add'} Task</h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <div className="buttonContainer">
              <Button type="submit" variant="primary">
              {type === 'update' ? 'Update' : 'Add'} Task
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default TodolistModal;
