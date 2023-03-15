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
      <div thevalue={theQuotes} className="quote niceEffect  rgba2">
        {/* “Have no fear of perfection. You'll never reach it.” - Salvador Dali */}
        {quoteMaker()} <br />
      </div>
      <div className="rgba2 text-center">(Quote of the Day/Refresh page)</div>
    </>
  );
}

export default Quotes;
