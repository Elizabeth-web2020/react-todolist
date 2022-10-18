import React from "react";

import "./style.css";

function Button({ children, type, variant, ...rest }) {
  return (
    <button className={variant} type={type === 'submit' ? 'submit' : 'button'} {...rest}>
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select
      className="status-btn"
      id={id}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
