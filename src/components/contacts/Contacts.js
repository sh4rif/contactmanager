import React, { Fragment } from "react";
import { Consumer } from "../../context";

import Contact from "./Contact";

class Contacts extends React.Component {
  state = { search: "" };

  onSearch = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          let updatedContacts = value.contacts.filter(contact => {
            return (
              contact.name
                .toLowerCase()
                .indexOf(this.state.search.toLowerCase()) !== -1
            );
          });
          // let updatedContacts = value.contacts;
          return (
            <Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              <div className="card mb-3">
                <div className="card-header">
                  <div className="row d-flex justify-content-between">
                    <div className="col-md-8">
                      <h3>Contacts</h3>
                    </div>
                    <div className="col-md-4">
                      <input
                        className="form-control form-control-sm"
                        placeholder="Search..."
                        value={this.state.search}
                        onChange={this.onSearch}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  {updatedContacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                  ))}
                </div>
              </div>
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
