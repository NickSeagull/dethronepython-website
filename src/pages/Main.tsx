import React from "react";
import Intro from "../components/Intro";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Main: React.FC = () => {
  return (
    <div>
      <Intro/>
      <Body/>
      <Footer/>
    </div>
  );
};

export default Main;