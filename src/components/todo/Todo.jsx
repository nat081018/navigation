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
        <div className="btn__wrapper">
          <button
            className="primary__btn primary__btn--delete"
            style={{
              color: props.todo.complete ? "green" : "",
            }}
            onClick={props.toggleComplite}
          >
            done!
          </button>
          <button
            className="primary__btn primary__btn--delete"
            onClick={props.deleteTodo}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};
