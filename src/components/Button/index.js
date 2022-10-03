import React from "react";

import "./style.css";

function Button({ children, type, variant, ...rest }) {
  return (
    <button className={variant} type="button" type={type === 'submit' ? 'submit' : 'button'} {...rest}>
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select
      id={id}
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
