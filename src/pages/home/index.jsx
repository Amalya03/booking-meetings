import React from "react";
import Header from "../../view/header/Header";
import Services from "../../view/services/Services";

const Home = () => {
  return (
    <div className="flex gap-[150px] flex-wrap">
    <Header/>
    <Services/>
    </div>
  );
};

export default Home;
