import BigFairGrid from "../../layout/BigFairGrid/BigFairGrid";

import "./BigFair.scss";

function BigFair() {
  return (
    <section className="big-fair">
      <div className="big-fair__head">
        <hr />
        <h3 className="big-fair__title">
          Big<span>.</span> Fair<span>.</span> Human<span>.</span>
        </h3>
        <div className="big-fair__subtitle">
          Learn why <span>over 5 million clients choose XM</span> as their
          trusted online broker.
        </div>
      </div>
      <BigFairGrid />
    </section>
  );
}

export default BigFair;
