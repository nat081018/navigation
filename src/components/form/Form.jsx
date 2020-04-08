import React, { Component } from "react";
import ReactDOM from "react-dom";
import shortid from "shortid";
import "./form.scss";

export default class Form extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    text: "",
  };

  handelChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  hendelSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
      // для id использовала библиотеку shortid
    });
    this.setState({
      text: "",
    });
    //submit form
  };
  render() {
    return (
      <div>
        <h1>Todos list...</h1>
        <h3>Add todo</h3>
        <form onSubmit={this.hendelSubmit}>
          <input
            className="form__input"
            name="text"
            value={this.state.text} //получила состояние инпута
            onChange={this.handelChange}
          />
          <button className="primary__btn">Add </button>
          {/* кнопка срабатывает , потомушто на ней по дефолту submit есть,   можно добавить и клик , пока не вижу смысла , все работает) */}
        </form>
      </div>
    );
  }
}
