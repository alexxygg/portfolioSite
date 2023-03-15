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
      <NavBar />
      <NIceRow oddNumber="3" />
      <ResultsSection />
      {/* <Carrousel /> */}
      <NIceRow oddNumber="2" />
      <AboutDev />
      <NIceRow oddNumber="7" />
      <Balance quote="Design you can rely on." />
      <NIceRow oddNumber="4" />
      <StackNprojects />
      <NIceRow oddNumber="5" />
      <Balance quote="Make your websites feel ALIVE." />
      <NIceRow oddNumber="6" />
      <Form />
      <Footer />
      {/* <ProgressBar /> */}
    </>
  );
}

export default App;
