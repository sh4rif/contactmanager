import React from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };

    case "ADD_CONTACT":
      return { ...state, contacts: [action.payload, ...state.contacts] };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};

class Provider extends React.Component {
  state = {
    deleteHandler: this.deleteHandler,
    contacts: [],
    posts: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  deleteHandler = () => {
    console.log("deleteHandler Called");
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    this.setState({ contacts: response.data });
  }

  render() {
    // console.log(this.state.contacts);
    // console.log(this.state.posts);
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;

export const Consumer = Context.Consumer;
