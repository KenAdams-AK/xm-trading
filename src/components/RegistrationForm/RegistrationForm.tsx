import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { FORM_ERRORS, FormFields, schema } from "./formSchema";

import Button from "../../layout/Button/Button";
import RegistrationBanner from "../../layout/RegistrationBanner/RegistrationBanner";
import RegistrationFooter from "../../layout/RegistrationFooter/RegistrationFooter";

import "./RegistrationForm.scss";

function RegistrationForm() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [currentStep, setCurrentStep] = useState(1);
  const isFirstStep = currentStep === 1;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    setError,
    getFieldState,
    control,
  } = useForm<FormFields>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });
  const fullNameState = getFieldState("fullName");
  const birthDateState = getFieldState("birthDate");
  const isContinueButtonDisabled =
    !(fullNameState.error?.message === undefined && fullNameState.isDirty) ||
    !(birthDateState.error?.message === undefined && birthDateState.isDirty);

  const handleClick = () => {
    setCurrentStep(2);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      console.log({ data });
    } catch (error) {
      setError("root", {
        message: FORM_ERRORS.root,
      });
    }
  };

  if (isSubmitSuccessful) {
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
        <div className="progress__step progress__step--active">
          <span>1</span> Step
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

      <form
        className="registration-form__form form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="form__fieldset">
          {isFirstStep && (
            <>
              <label htmlFor="fullName">
                Full Name
                <input
                  type="text"
                  placeholder="Full Name"
                  aria-invalid={errors.fullName ? "true" : "false"}
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <span
                    role="alert"
                    className="form__error form__error--invalid"
                  >
                    <span />
                    {errors.fullName.message}
                  </span>
                )}
              </label>

              <label htmlFor="birthDate">
                Date of Birth
                <input
                  type="date"
                  placeholder="dd/mm/yy"
                  required // should be "required" to fix placeholder color
                  aria-invalid={errors.birthDate ? "true" : "false"}
                  {...register("birthDate")}
                />
                {errors.birthDate && (
                  <span
                    role="alert"
                    className="form__error form__error--invalid"
                  >
                    <span />
                    {errors.birthDate.message}
                  </span>
                )}
              </label>
            </>
          )}

          {!isFirstStep && (
            <>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  placeholder="email@email.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email")}
                />
                {errors.email && (
                  <span
                    role="alert"
                    className="form__error form__error--invalid"
                  >
                    <span />
                    {errors.email.message}
                  </span>
                )}
              </label>

              <label htmlFor="password">
                Password
                <input
                  className="invalid"
                  type="password"
                  placeholder="password"
                  aria-invalid={errors.password ? "true" : "false"}
                  {...register("password")}
                />
                {errors.password?.message && (
                  <ul className="form__errors-check-list">
                    {Object.keys(errors.password.message).map((errType) => {
                      if (errors.password?.message === undefined) {
                        return null;
                      }

                      const { status, message } =
                        // @ts-expect-error:next-line, it sees message as a string, however in this case this is an object which is specified in the "superRefine" function
                        errors.password.message[errType];

                      return (
                        <li
                          key={errType}
                          role="alert"
                          className={`form__error form__error--${status}`}
                        >
                          <span />
                          {message}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </label>
            </>
          )}
        </fieldset>
        {errors.root && (
          <div className="form__error form__error--invalid">
            {errors.root.message}
          </div>
        )}

        {isFirstStep ? (
          <Button
            className="form__button"
            type="button"
            onClick={handleClick}
            disabled={isContinueButtonDisabled}
          >
            Continue
          </Button>
        ) : (
          <Button className="form__button" type="submit" disabled={!isValid}>
            {isSubmitting ? "Loading..." : "Register now"}
          </Button>
        )}
      </form>
      <DevTool control={control} />

      <RegistrationFooter />
    </div>
  );
}

export default RegistrationForm;
