import React from "react";
import "./Homepage.css";
import {TypeAnimation} from "react-type-animation";
// import { Tab } from "bootstrap";
// // import Button from "../../Components/Button/Button";
// const backgroundImg = require("../../assets/home-banner.png");


const HomePage = () => {
  
  return (
    <div className="HomePage">
      <div className="top-bar">
        {/* <div className="phone">
          <h3>+919880891493</h3>
        </div> */}
        {/* <div className="email">
          <h3>pratik6009sabata@gmail.com</h3>
        </div> */}
      </div>
      <div className="container">
        <div className="intro-para">
          <div className="info-div">
            <br></br>
            <h3> Hello, My name is</h3>
            <h1 style={{ fontSize: '4.5rem', fontWeight: "bolder" }}>Avit Desai</h1>
            <div>
              <TypeAnimation
                cursor={true}
                sequence={[
                  "Web Developer",
                  1000,
                  "Python Developer",
                  1000,
                  "Machine Learning",
                  1000,
                ]}
                wrapper="h2"
                repeat={Infinity}
                className="typing-text"
              />
            </div>
            <p style = {{ fontWeight: "bolder"}} className="Container">
              Highly motivated software engineer with a strong background in developing . Tech Ethusiastic ,
              Quick Learner
            </p>
            <div></div>
            
          </div>
        </div>
        <div
          className="my-img"
         
        ></div>
      </div>
    </div>
  );
};

export default HomePage;
