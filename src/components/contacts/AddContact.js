import React, { Component } from "react";
import axios from "axios";

import { Consumer } from "../../context";
import { TextInputGroup } from "../layout/TextInputGroup";

class AddContact extends Component {
  state = { name: "", email: "", phone: "", errors: {} };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = async (dispatch, event) => {
    event.preventDefault();

    const { name, email, phone } = this.state;

    console.log(event.target.value);

    if (!name.trim()) {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = { name, email, phone };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );

    dispatch({ type: "ADD_CONTACT", payload: res.data });

    this.setState({ name: "", email: "", phone: "", errors: {} });
    console.log(this.props.history);
    this.props.history.push("/");
  };

  onBlurHandler = event => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    // if (!event.target.value) {
    //   this.setState({
    //     errors: { [event.target.name]: event.target.name + " is required" }
    //   });
    // }
    // console.log(this.state.errors);
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return this.renderForm(dispatch);
        }}
      </Consumer>
    );
  }

  renderForm = dispatch => {
    const { name, email, phone, errors } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmitHandler.bind(this, dispatch)}>
            <TextInputGroup
              name="name"
              placeholder="Enter Name..."
              value={name}
              onChange={this.onChangeHandler}
              onBlur={this.onBlurHandler}
              error={errors.name}
            />
            <TextInputGroup
              name="email"
              type="email"
              placeholder="Enter Email..."
              value={email}
              onChange={this.onChangeHandler}
              onBlur={this.onBlurHandler}
              error={errors.email}
            />
            <TextInputGroup
              name="phone"
              placeholder="Enter Phone..."
              value={phone}
              onChange={this.onChangeHandler}
              onBlur={this.onBlurHandler}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  };
}

export default AddContact;
