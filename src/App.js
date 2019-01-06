import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Provider from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import EditContact from "./components/contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }

  // async componentDidMount() {
  //   const contacts = {};
  //   await fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => response.json())
  //     .then(json => {
  //       // contact.name = json.name;
  //       // contact.phone = json.phone;
  //       // contact.email = json.email;
  //       // console.log(contact);
  //       console.log(json);
  //       json.forEach(user => {
  //         contacts.user = user;
  //       });
  //     });

  //   console.log(contacts);
  // }
}

export default App;
