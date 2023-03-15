import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

function TodoList() {
  const [todos, settodos] = [];

  const addTodo = (todo) => {
    if (!todo.hasOwnProperty("text") || todo.text === "") {
      return;
    }

    const newTodos = [todo, ...todos];
    settodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatesTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
  };

  return (
    <div>
      <h1>What we have to do today</h1>
      <Form onSubmit={addTodo} />
      <Todo />
    </div>
  );
}

export default TodoList;
