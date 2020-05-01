import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import Form from "./form/Form.jsx";
import Todo from "./todo/Todo.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    todos: [],
    todoShowAll: "all",
  };
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplite = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            // можно заменить на ...todo, complete: !todo.complete, просто скопирует все что без изменений, и довавит только одно изменение в complete
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  upInfoAboutTodo = (str) => {
    this.setState({
      todoShowAll: str,
    });
  };

  hendeleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  hendeleRemoveAllCompleteTodo = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        if (!todo.complete) {
          todo.style = {
            display: "none",
          };
        }
      }),
    });
  };

  render() {
    let todo = [];
    if (this.state.todoShowAll === "all") {
      todo = this.state.todos;
    } else if (this.state.todoShowAll === "active") {
      todo = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoShowAll === "complete") {
      todo = this.state.todos.filter((todo) => todo.complete);
    }
    return (
      <div className="App">
        <h1>Todos list</h1>
        <div className="app__btn-wrapper">
          <button
            className="primary__btn"
            onClick={() => {
              this.upInfoAboutTodo("all");
            }}
          >
            all
          </button>
          <button
            className="primary__btn"
            onClick={() => {
              this.upInfoAboutTodo("active");
            }}
          >
            active
          </button>
          <button
            className="primary__btn"
            onClick={() => {
              this.upInfoAboutTodo("complete");
            }}
          >
            complete
          </button>
        </div>
        <div className="wrapper__btn--remove">
          {this.state.todos.some((todo) => todo.complete) ? (
            <button
              className="primary__btn "
              onClick={() => this.hendeleRemoveAllCompleteTodo()}
            >
              remove all complete
            </button>
          ) : null}
        </div>
        <div>
          You need todo:{" "}
          {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <Form onSubmit={this.addTodo} />
        {todo.map((todo) => (
          <Todo
            toggleComplite={() => this.toggleComplite(todo.id)}
            deleteTodo={() => this.hendeleDeleteTodo(todo.id)}
            id={todo.id}
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    );
  }
}
