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

    setTodos(removeArr);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.hasOwnProperty("text") || newValue.text === "") {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

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
    <div className="test">
      <h1>What we have to do today</h1>
      <Form onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default TodoList;
