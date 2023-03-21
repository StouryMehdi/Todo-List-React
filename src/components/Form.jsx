import React, { useState, useEffect, useRef } from "react";

function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

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
      {props.edit ? (
        <>
          <input
            onChange={handleChanges}
            className="todo-input"
            placeholder="Update Your Item"
            value={input}
            ref={inputRef}
            type="text"
            name="text"
          />
          <button className="todo-button edit">update</button>
        </>
      ) : (
        <>
          <input
            onChange={handleChanges}
            className="todo-input"
            placeholder="Add To Tist"
            value={input}
            ref={inputRef}
            type="text"
            name="text"
          />
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
}

export default Form;
