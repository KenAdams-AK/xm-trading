import Button from "../../layout/Button/Button";

import "./UserFieldset.scss";

function UserFieldset() {
  return (
    <fieldset className="user-fieldset">
      <label htmlFor="username">
        Full Name
        <input type="text" id="username" placeholder="Full Name" />
      </label>
      <label htmlFor="date-of-birth">
        Date of Birth
        <input type="date" id="date-of-birth" placeholder="dd/mm/yy" />
      </label>
      <Button type="submit" disabled>
        Continue
      </Button>
    </fieldset>
  );
}

export default UserFieldset;
