function ResultsSection() {
  return (
    <div
      data-aos="fade-up"
      className="row m-auto mainMotivational shadowedLess w-100"
    >
      <div className=" motivational2 col-4 col-md-3 m-auto backgroundDiv ">
        <h3 className="gradientText outlineGradientText row col">THE</h3>
        <h3 className="gradientText outlineGradientText row col">
          {" "}
          RESULTS
        </h3>{" "}
        <h3 className="gradientText outlineGradientText row col">
          {" "}
          YOU'RE
        </h3>{" "}
        <h3 className="gradientText outlineGradientText row col">
          {" "}
          LOOKING
        </h3>{" "}
        <h3 className="gradientText outlineGradientText row col"> FOR.</h3>
        <h3 className="lastWords row col">(Scroll down)</h3>
        <div className="moreAboutMe">
          <img className="downArrow" src="./downward.png" />
        </div>
      </div>

      <div className="motivational shadowedLess col-7 col-md-5 m-auto"></div>
    </div>
  );
}
export default ResultsSection;
