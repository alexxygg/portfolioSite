import React from "react";
import NavBar from "../components/NavBar";
import Carrousel from "../components/Carrousel";
import Quotes from "../components/Quotes";
import AboutDev from "../components/AboutDev";
import StackNprojects from "../components/StackNprojects";
import Footer from "../components/Footer";
import ResultsSection from "../components/ResultsSection";
import NIceRow from "../components/NIceRow";
import Form from "../components/Form";
import Panel from "../components/Panel";
import ProgressBar from "../components/ProgressBar";
import Balance from "../components/Balance";

function App() {
  return (
    <>
      <NIceRow oddNumber="3" />
      <ResultsSection />
      {/* <Carrousel /> */}
      <div id="about"></div> <NIceRow oddNumber="2" />
      <NavBar />
      <AboutDev />
      <NIceRow oddNumber="7" />
      <Balance quote="Design you can rely on." />
      <div id="stack"></div>
      <NIceRow oddNumber="4" />
      <StackNprojects />
      <NIceRow oddNumber="5" />
      <Balance quote="Make your websites feel ALIVE." />
      <div id="contact"></div>
      <NIceRow oddNumber="6" />
      <Form />
      <Footer />
      {/* <ProgressBar /> */}
    </>
  );
}

export default App;
