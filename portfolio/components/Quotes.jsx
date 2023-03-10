import { theQuotes } from "../src/theQuotes";

const quoteMaker = () => {
  let quote = theQuotes[Math.floor(Math.random() * theQuotes.length)];
  return quote;
};
function Quotes() {
  let date = new Date().toLocaleDateString("en-us");

  return (
    <>
      {" "}
      <h2 className="date">({date})</h2>
      <div thevalue={theQuotes} className="quote niceEffect">
        {/* “Have no fear of perfection. You'll never reach it.” - Salvador Dali */}
        {quoteMaker()} <br />
      </div>
      <div className="moreAboutMe">
        <img className="downArrow" src="./downward.png" />
      </div>
    </>
  );
}

export default Quotes;
