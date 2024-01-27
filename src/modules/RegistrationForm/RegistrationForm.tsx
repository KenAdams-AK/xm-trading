// import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useMultistepForm } from "../../hooks/useMultiStepForm";
import AccountForm from "../../components/AccountFieldset/AccountFieldset";
import UserForm from "../../components/UserFieldset/UserFieldset";
import Button from "../../layout/Button/Button";
import TermsAndConditions from "../../layout/TermsAndConditions/TermsAndConditions";

import "./RegistrationForm.scss";

function RegistrationForm() {
  // const [currentStep, setCurrentStep] = useState(1);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { isFirstStep } = useMultistepForm([<UserForm />, <AccountForm />]);

  return (
    <div className="registration-form">
      <div className="registration-form__progress progress">
        <div className="progress__step">
          <span className="active">1</span> Step
          <div className="progress__bar">
            <div className="progress__bar--fill" />
          </div>
        </div>
        {!isMobile && (
          <div className="progress__step">
            <span>2</span> Step
            <div className="progress__bar">
              <div className="progress__bar--fill" />
            </div>
          </div>
        )}
      </div>

      <form className="registration-form__form form">
        <fieldset className="form__fieldset">
          <label htmlFor="username">
            Full Name
            <input type="text" id="username" placeholder="Full Name" />
          </label>
          <label htmlFor="date-of-birth">
            Date of Birth
            <input
              type="date"
              id="date-of-birth"
              placeholder="dd/mm/yy"
              required // should be "required" in order to fix placeholder color issue
            />
          </label>

          {isFirstStep && (
            <>
              <label htmlFor="email">
                Email
                <input type="email" id="email" placeholder="email@email.com" />
              </label>
              <label htmlFor="password">
                Password
                <input type="password" id="password" placeholder="Password" />
              </label>
            </>
          )}
        </fieldset>

        <Button
          className="form__button"
          type={isFirstStep ? "button" : "submit"}
          disabled={isFirstStep}
        >
          {isFirstStep ? "Continue" : "Register now"}
        </Button>
      </form>

      <div className="registration-form__footer">
        Don’t have an account? <a href="!#">Create one here</a> and register for
        the event
        <TermsAndConditions />
      </div>
    </div>
  );
}

export default RegistrationForm;
