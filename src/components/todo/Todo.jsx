import React from "react";
import "./todo.scss";

export default (props) => {
  return (
    <div className="container">
      <div className="todo__complete-wrapper">
        <div
          className="todo__complete"
          style={{
            textDecoration: props.todo.complete ? "line-through" : "",
          }}
          onClick={props.toggleComplite}
        >
          {props.todo.text}
        </div>
        <button className="primary__btn" onClick={props.deleteTodo}>
          delete
        </button>
      </div>
    </div>
  );
};
