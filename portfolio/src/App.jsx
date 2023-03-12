import React from "react";
import NavBar from "../components/NavBar";
import Carrousel from "../components/Carrousel";
import Quotes from "../components/Quotes";
import AboutDev from "../components/AboutDev";
import StackNprojects from "../components/StackNprojects";
import Footer from "../components/Footer";
import CFterNavBar from "../components/CFterNavBar";
import NIceRow from "../components/NIceRow";
import Form from "../components/Form";
import ShowCasing from "../components/ShowCasing";
import Panel from "../components/Panel";
import ProgressBar from "../components/ProgressBar";
import Balance from "../components/Balance";

function App() {
  return (
    <>
      <Panel />
      <NavBar />
      <Carrousel />
      <Quotes />
      <NIceRow oddNumber="1" />
      <ShowCasing />
      <NIceRow oddNumber="2" />
      <StackNprojects />
      <NIceRow oddNumber="3" />
      <CFterNavBar />
      <NIceRow oddNumber="4" />
      <AboutDev />
      <NIceRow oddNumber="5" />
      <Balance quote="Make your websites feel ALIVE." />
      <NIceRow oddNumber="6" />
      <Form />
      <NIceRow oddNumber="7" />
      <Balance quote="Design you can rely on." />
      <NIceRow oddNumber="8" />
      <Footer />
      <ProgressBar />
    </>
  );
}

export default App;
