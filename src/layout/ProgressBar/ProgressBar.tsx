import { useMediaQuery } from "react-responsive";

import "./ProgressBar.scss";

type Props = {
  currentStep: 1 | 2;
  isFirstStepValid: boolean;
  isFormValid: boolean;
  isFirstStepComplete: boolean;
  isSubmitting: boolean;
};

function ProgressBar({
  currentStep,
  isFirstStepValid,
  isFormValid,
  isFirstStepComplete,
  isSubmitting,
}: Props) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isFirstStep = currentStep === 1;
  const isSecondStep = currentStep === 2;

  if (isMobile)
    return (
      <div className="registration-form__progress progress">
        {isFirstStep && (
          <div className="progress__step active">
            <span>1</span> Step
            <div className="progress__bar">
              <div
                className={`progress__fill ${isFirstStepValid && "valid"} ${isFirstStepComplete && "complete"}`}
              />
            </div>
          </div>
        )}
        {isSecondStep && (
          <div className={`progress__step ${isSecondStep && "active"}`}>
            <span>2</span> Step
            <div className="progress__bar">
              <div
                className={`progress__fill ${isFormValid && "valid"} ${isSubmitting && "complete"}`}
              />
            </div>
          </div>
        )}
      </div>
    );

  return (
    <div className="registration-form__progress progress">
      <div className="progress__step active">
        <span>1</span> Step
        <div className="progress__bar">
          <div
            className={`progress__fill ${isFirstStepValid && "valid"} ${isSecondStep && "complete"}`}
          />
        </div>
      </div>
      <div className={`progress__step ${isSecondStep && "active"}`}>
        <span>2</span> Step
        <div className="progress__bar">
          <div
            className={`progress__fill ${isFormValid && "valid"} ${isSubmitting && "complete"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
