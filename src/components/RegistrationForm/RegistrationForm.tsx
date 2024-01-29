import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FORM_ERRORS, FormFields, schema } from "./formSchema";

import Button from "../../layout/Button/Button";
import RegistrationBanner from "../../layout/RegistrationBanner/RegistrationBanner";
import RegistrationFooter from "../../layout/RegistrationFooter/RegistrationFooter";
import ProgressBar from "../../layout/ProgressBar/ProgressBar";
import ValidationError from "../../layout/ValidationError/ValidationError";

import "./RegistrationForm.scss";

function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [isFirstStepComplete, setIsFirstStepComplete] = useState(false);
  const isFirstStep = currentStep === 1;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    setError,
    getFieldState,
    // control,
  } = useForm<FormFields>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });
  const fullNameState = getFieldState("fullName");
  const birthDateState = getFieldState("birthDate");
  const isFirstStepValid =
    fullNameState.error?.message === undefined &&
    fullNameState.isDirty &&
    birthDateState.error?.message === undefined &&
    birthDateState.isDirty;

  const handleClick = () => {
    setIsFirstStepComplete(true);

    const timerId = setTimeout(() => {
      setCurrentStep(2);
    }, 550); // transition duration

    return () => clearTimeout(timerId);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      console.log("Registration data has been sent: ", { data });
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
      <ProgressBar
        currentStep={currentStep}
        isFirstStepValid={isFirstStepValid}
        isFirstStepComplete={isFirstStepComplete}
        isFormValid={isValid}
        isSubmitting={isSubmitting}
      />
      <form
        className="registration-form__form form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isFirstStep && (
          <>
            <fieldset className="form__fieldset">
              <label htmlFor="fullName">
                Full Name
                <input
                  className={errors.fullName ? "invalid" : ""}
                  type="text"
                  placeholder="Full Name"
                  aria-invalid={errors.fullName ? "true" : "false"}
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <ValidationError error={errors.fullName.message ?? ""} />
                )}
              </label>

              <label htmlFor="birthDate">
                Date of Birth
                <input
                  className={errors.birthDate ? "invalid" : ""}
                  type="date"
                  placeholder="dd/mm/yy"
                  required // should be "required" to fix placeholder color
                  aria-invalid={errors.birthDate ? "true" : "false"}
                  {...register("birthDate")}
                />
                {errors.birthDate && (
                  <ValidationError error={errors.birthDate.message ?? ""} />
                )}
              </label>
            </fieldset>
            <Button
              className="form__button"
              type="button"
              onClick={handleClick}
              disabled={!isFirstStepValid}
            >
              Continue
            </Button>
          </>
        )}

        {!isFirstStep && (
          <>
            <fieldset className="form__fieldset">
              <label htmlFor="email">
                Email
                <input
                  className={errors.email ? "invalid" : ""}
                  type="email"
                  placeholder="email@email.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email")}
                />
                {errors.email && (
                  <ValidationError error={errors.email.message ?? ""} />
                )}
              </label>

              <label htmlFor="password">
                Password
                <input
                  className={errors.password ? "invalid" : ""}
                  type="password"
                  placeholder="password"
                  aria-invalid={errors.password ? "true" : "false"}
                  {...register("password")}
                />
                {errors.password?.message && (
                  <ul className="form__errors-check-list">
                    {Object.keys(errors.password.message).map((errType) => {
                      if (errors.password?.message === undefined) return null;
                      const { status, message } =
                        // ts sees "message" as a string, however in this case it is an object which is set in the "superRefine" function
                        // @ts-expect-error:next-line
                        errors.password.message[errType];
                      return (
                        <ValidationError
                          key={errType}
                          error={message}
                          modifier={status}
                          isListItems
                        />
                      );
                    })}
                  </ul>
                )}
              </label>
            </fieldset>
            <Button
              className="form__button"
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Register now"}
            </Button>
          </>
        )}
        {errors.root && <ValidationError error={errors.root.message ?? ""} />}
      </form>
      {/* uncomment to see the form's devtool in the browser */}
      {/* <DevTool control={control} />  */}
      <RegistrationFooter />
    </div>
  );
}

export default RegistrationForm;
