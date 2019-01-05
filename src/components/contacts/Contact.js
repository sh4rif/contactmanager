import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

import "./contacts.css";

export class Contact extends Component {
  state = { showContactInfo: false };

  onShowClick = (id, e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    // dispatch({ type: "DELETE_CONTACT", payload: id });
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  componentDidMount() {
    // console.log(this.props);
  }

  render() {
    const style = { cursor: "pointer" };

    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    const classNameI = `fas ${
      showContactInfo ? "fa-angle-double-down" : "fa-angle-double-left"
    }`;

    return (
      <Consumer>
        {value => (
          <div className="card card-body mb-3 card-padding">
            <h6>
              <span onClick={this.onShowClick} style={style}>
                {name}
                &nbsp;
                <i className={classNameI} style={style} />
              </span>
              <i
                className="fas fa-times mr-auto"
                style={{ ...style, color: "red", float: "right" }}
                onClick={this.onDeleteClick.bind(this, id, value.dispatch)}
              />
              <Link to={`/contact/edit/${id}`}>
                <i
                  className="fas fa-pencil-alt cursor-pointer"
                  style={{
                    color: "black",
                    float: "right",
                    marginRight: "1rem"
                  }}
                />
              </Link>
            </h6>
            {showContactInfo ? (
              <ul className="list-group mt-4">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>
            ) : null}
          </div>
        )}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
