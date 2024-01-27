import Button from "../../layout/Button/Button";
import "./AccountFieldset.scss";

function AccountFieldset() {
  return (
    <fieldset className="user-fieldset">
      <label htmlFor="email">
        Email
        <input type="email" id="email" placeholder="email@email.com" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" id="password" placeholder="Password" />
      </label>
      <Button type="submit" disabled>
        Register now
      </Button>
    </fieldset>
  );
}

export default AccountFieldset;
