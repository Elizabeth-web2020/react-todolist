import React from "react";
import { Toaster } from "react-hot-toast";
import TodolistContent from "../../components/TodolistContent";
import TodolistHeader from "../../components/TodolistHeader";

import "./style.css";

function Todolist({ userName }) {
  return (
    <>
      {userName ? (
        <div className="container">
          <h1>TODO LIST</h1>
          <h3 className="user">Hello, {userName}</h3>
          <TodolistHeader />
          <TodolistContent />
        </div>
      ) : (
        <h3 className="empty-name">Enter the name to continue...</h3>
      )}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}

export default Todolist;
