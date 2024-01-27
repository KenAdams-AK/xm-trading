import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";

import "./RegistrationFooter.scss";

function RegistrationFooter() {
  return (
    <div className="registration-footer">
      Don’t have an account? <a href="#!">Create one here</a> and register for
      the event
      <TermsAndConditions />
    </div>
  );
}

export default RegistrationFooter;
