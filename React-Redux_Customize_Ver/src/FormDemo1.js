import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { userName: "", city: "" };

  onChangeHandler = (event) => {
        // this.setState({ userName: event.target.value }); tek bir form elemanı
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(`User Name: ${this.state.userName}, City: ${this.state.city}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3>User Name</h3>
          <input name="userName" onChange={this.onChangeHandler} type="text" />
          <h3>User Name is {this.state.userName}</h3>

          <h3>City</h3>
          <input name="city" onChange={this.onChangeHandler} type="text" />
          <h3>City is {this.state.city}</h3>

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}
