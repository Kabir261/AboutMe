import React from "react";
import AboutImg from "./about.png";
const About = () => {
  return (
    <div className="container">
      <div className="about__content">
        <div className="about__img">
          <img src={AboutImg} alt="" />
        </div>
        <div className="about__text">
          <h1 className="about__title">Know me</h1>
          <p className="about__description">
           Hi I am Kabir Kalsi and I currently,
            work as a freelancer and content creator. <br />
            I am a well-organized, creative and goal-oriented graduate possessing, excellent communication, problem-solving and leadership skills with a fair to explore suitable avenues in CSE, while developing advanced projects with efficiency and quality.
          </p>
          <a href="https://kabir261.github.io/Cv-website/" target="_blank" rel="noopener noreferrer"> My resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;
