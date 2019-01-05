import React, { Component } from "react";
import axios from "axios";

import { Consumer } from "../../context";
import { TextInputGroup } from "../layout/TextInputGroup";
import "./contacts.css";

class EditContact extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", phone: "", errors: {} };
    this.id = this.props.match.params.id;
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${this.id}`
    );

    const { name, email, phone } = res.data;

    this.setState({ name, email, phone });
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandler = async (dispatch, event) => {
    event.preventDefault();

    const { name, email, phone } = this.state;

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

    const updatedContact = { name, email, phone };

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${this.id}`,
      updatedContact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    this.setState({ name: "", email: "", phone: "", errors: {} });

    this.props.history.push("/");
  };

  render() {
    if (!this.state.name) {
      return (
        <div className="d-flex justify-content-center">
          <div className="loader" />
        </div>
      );
    }
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
        <div className="card-header">Edit Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmitHandler.bind(this, dispatch)}>
            <TextInputGroup
              name="name"
              placeholder="Enter Name..."
              value={name}
              onChange={this.onChangeHandler}
              error={errors.name}
            />
            <TextInputGroup
              name="email"
              type="email"
              placeholder="Enter Email..."
              value={email}
              onChange={this.onChangeHandler}
              error={errors.email}
            />
            <TextInputGroup
              name="phone"
              placeholder="Enter Phone..."
              value={phone}
              onChange={this.onChangeHandler}
              error={errors.phone}
            />
            <input
              type="submit"
              value="Update Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  };
}

export default EditContact;
