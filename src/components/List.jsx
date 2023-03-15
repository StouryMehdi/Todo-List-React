import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.hasOwnProperty("text") || todo.text === "") {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos.filter((todo) => todo.id !== id)];
    setTodos(removeTodo);
  };

  const updatesTodos = (todoId, newV) => {};

  const completeTodo = (id) => {
    let updatesTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatesTodos);
  };

  return (
    <div>
      <h1>What we have to do today</h1>
      <Form onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default TodoList;
