function Balance({ quote }) {
  return (
    <div data-aos="fade-up" className="balance w-100 shadowedLess ">
      <div />
      <div className="professional backgroundDiv exampleGradientDiv ">
        <div className=" exampleGradientText exampleOutlineGradientDiv2">
          {quote}
        </div>
      </div>
    </div>
  );
}

export default Balance;
