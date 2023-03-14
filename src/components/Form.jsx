import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleChanges = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChanges}
        className="todo-input"
        placeholder="Add To Tist"
        value={input}
        type="text"
        name="text"
      />
      <button className="todo-button">Add</button>
    </form>
  );
}

export default Form;
