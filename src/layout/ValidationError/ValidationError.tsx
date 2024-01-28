import "./ValidationError.scss";

type Props = {
  error: string;
  isListItems?: boolean;
  modifier?: "valid" | "invalid";
};

function ValidationError({ error, modifier = "invalid", isListItems }: Props) {
  if (isListItems) {
    return (
      <li
        role="alert"
        className={`validation-error validation-error--${modifier}`}
      >
        <span />
        {error}
      </li>
    );
  }

  return (
    <span
      role="alert"
      className={`validation-error validation-error--${modifier}`}
    >
      {error}
    </span>
  );
}

export default ValidationError;
