import { ButtonHTMLAttributes } from "react";

import "./Button.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  onclick: () => void;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  isDisabled?: boolean;
}

function Button({
  type = "button",
  className = "",
  isDisabled = false,
  onclick,
  children,
  ...rest
}: Props) {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onclick}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
