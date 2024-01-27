/* eslint-disable @typescript-eslint/no-unused-vars */ // TODO: remove this line once the component is being used
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useMultistepForm } from "../../hooks/useMultiStepForm";

import Button from "../../layout/Button/Button";
import RegistrationBanner from "../../layout/RegistrationBanner/RegistrationBanner";
import UserFieldset from "../UserFieldset/UserFieldset";
import AccountFieldset from "../AccountFieldset/AccountFieldset";
import RegistrationFooter from "../../layout/RegistrationFooter/RegistrationFooter";

import "./RegistrationForm.scss";

const steps = [1, 2];

const errors = {
  name: "Please enter valid name",
  date: {
    maxAge: "Maximum age requirements, 60 years old",
    minAge: "Minimum age requirements, 18 years old",
  },
  email: "Please enter valid email",
  password: {
    length: " 8 - 15 characters",
    numbers: " 1 or more numbers",
    lowerCase: " 1 or more lower case letters",
    upperCase: "1 or more upper case letters",
    specialCharacters: "1 or more special characters  (#[]()@$&*!?|,.^/+_-)",
  },
};

function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { isFirstStep } = useMultistepForm([
    <UserFieldset />,
    <AccountFieldset />,
  ]);

  if (isSuccess) {
    return (
      <div className="registration-form">
        <RegistrationBanner />
        <RegistrationFooter />
      </div>
    );
  }

  return (
    <div className="registration-form">
      <div className="registration-form__progress progress">
        {steps.map((step) => {
          const isActive = step === currentStep;
          const isCompleted = step < currentStep;
          const isSecondStep = step === 2;

          return (
            <div
              key={step}
              className={`progress__step ${isSecondStep && isMobile ? "hidden" : ""}
                                        ${isActive ? "active" : ""}
                                        ${isCompleted ? "completed" : ""}`}
            >
              <span>{step}</span> Step
              <div className="progress__bar">
                <div className="progress__bar--fill" />
              </div>
            </div>
          );
        })}

        {/* <div className="progress__step">
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
        )} */}
      </div>

      <form className="registration-form__form form">
        <fieldset className="form__fieldset">
          <label htmlFor="username" style={{ display: "none" }}>
            Full Name
            <input type="text" id="username" placeholder="Full Name" />
            {/* <div className="form__error">{errors.name}</div> */}
          </label>
          <label htmlFor="date-of-birth" style={{ display: "none" }}>
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
                <input
                  className="invalid"
                  type="password"
                  id="password"
                  placeholder="password"
                />
                <ul className="form__errors-list">
                  <li className="form__error form__error--default">
                    <span />
                    {errors.password.length}
                  </li>
                  <li className="form__error form__error--valid">
                    <span />
                    {errors.password.numbers}
                  </li>
                  <li className="form__error form__error--invalid">
                    <span />
                    {errors.password.lowerCase}
                  </li>
                </ul>
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

      <RegistrationFooter />
    </div>
  );
}

export default RegistrationForm;
