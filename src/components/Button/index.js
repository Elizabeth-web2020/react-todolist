import React, { ReactNode } from "react";

import "./style.css";

// interface Props {
//   children?: ReactNode,
//   type?: string,
//   variant?: string,
//   id?: string,
//   value?: string,
//   onClick?: React.MouseEventHandler<HTMLElement>,
//   onChange?: React.MouseEventHandler<HTMLElement>
// }

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
