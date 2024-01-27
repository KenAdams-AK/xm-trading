import { ButtonHTMLAttributes } from "react";

import "./Button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
}

function Button({
  type = "button",
  className = "",

  children,
  ...rest
}: Props) {
  return (
    <button type={type} className={`button ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
