/* eslint-disable @typescript-eslint/no-unused-vars */
import "./ProgressBar.scss";

type Props = {
  isFirstStep: boolean;
  isMobile: boolean;
};

// @ts-expect-error:next-line
function ProgressBar({ isFirstStep, isMobile }: Props) {
  return (
    <div className="registration-form__progress progress">
      {/* {isMobile && isFirstStep && ( */}
      <div className="progress__step progress__step--active">
        <span>1</span> Step
        <div className="progress__bar">
          <div className="progress__bar--fill" />
        </div>
      </div>
      {/* )} */}
      {/* {isMobile && !isFirstStep && ( */}
      <div className="progress__step">
        <span>2</span> Step
        <div className="progress__bar">
          <div className="progress__bar--fill" />
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default ProgressBar;
