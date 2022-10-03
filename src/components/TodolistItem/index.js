import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { deleteTodo, updateTodo } from "../../slices/todoSlice";
import { MdDelete, MdEdit } from "react-icons/md";
import TodolistModal from "../TodolistModal/index";
import CheckButton from "../CheckButton/index";

import "./style.css";

const TodolistItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status])

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo Deleted Successfully");
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? 'incomplete' : 'complete'
      })
    )
  };

  return (
    <>
      <div className="item">
        <div className="item-wrapper">
        <div className="todoDetails">
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className="texts">
            <p
              className={
                todo.status === "complete"
                  ? "todoText, todoText--completed"
                  : "todoText"
              }
            >
              {todo.title}
            </p>
            <p className="time">
              {format(new Date(todo.time), "p, MM/dd/yyyy")}
            </p>
          </div>
        </div>
        <div className="todoActions">
          <div
            className="icon"
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
          <div
            className="icon"
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
        </div>
        </div>
      </div>
      <TodolistModal
        todo={todo}
        type="update"
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      />
    </>
  );
};

export default TodolistItem;
