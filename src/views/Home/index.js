import React from "react";
import Header from "../../components/Header";
import bgimage from "../../assets/images/bgimage.PNG";
import Button from "../../components/Button";
import "./style.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hero-banner">
        <div className="hero-text-container">
          <h1>CONECTING THE DISCONNECTED</h1>
          <h2>
            <span>Vyorius</span> brings unmanned robots <span>together</span>,
            wherever they are
          </h2>
          <p>
            With all of the operations, commanding and maintenance tools in one
            place, unmanned vehicles will stay connected and productive no
            matter where you’re Delivering
          </p>
          <div className="hero-button-row">
            <Button name="Try  Vyorius" size="big" />
            <Button name="Learn More" size="big" type="outline" />
          </div>
          <span>
            Need to order a delivery?<a href="">Get Started</a>{" "}
          </span>
        </div>
        <div className="hero-image-container">
          <img src={bgimage} alt="background"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
