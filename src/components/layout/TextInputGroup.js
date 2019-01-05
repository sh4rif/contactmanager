import React from "react";
import classnames from "classnames";

const TextInputGroup = props => {
  // console.log(props);
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.placeholder}</label>
      <input
        {...props}
        className={classnames("form-control form-control-lg", {
          "is-invalid": props.error
        })}
      />
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

TextInputGroup.defaultProps = {
  type: "text",
  value: "",
  autoComplete: "off"
};

export { TextInputGroup };
