import React, { useState } from "react";
import { RiClosecircleLine, RiEdit } from "react-icons/fa";
import Form from "./Form";

function Todo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div
      className={todo.isComplate ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiClosecircleLine />
        <RiEdit />
      </div>
    </div>
  ));
}

export default Todo;
