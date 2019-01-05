import React, { Fragment } from "react";
import { Consumer } from "../../context";

import Contact from "./Contact";

const Contacts = props => {
  // console.log(props);
  return (
    <Consumer>
      {value => (
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
                  />
                </div>
              </div>
            </div>
            <div className="card-body">
              {value.contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </Consumer>
  );
};

export default Contacts;
