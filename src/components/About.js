import React from "react";
import img from "../img/img.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <h2 clsssName="section__title section__title--about">Who I am?</h2>
      <p className="section__subtitle section__subtitle--about">
        Graphic Designer, Bhopal, MP
      </p>
      <div className="about-me__body">
        <b>
          <p>
            Hi, This is Meenakshi Sharma, BTech Computer Science Student. I am
            passionate about my work.
          </p>
          <p>
            I am doing Graphic Desiging to enhance my designing skills as well
            as i am learning Data Structre and Algorithm, Problem Solving also
            using C++ for develop my thinking skills in field of computer
            science.
          </p>
          <p>
            I am just an intermediate but i am open for work to achive my goal
            with organization goal as well as i want to improve my skills.
          </p>
        </b>
      </div>

      <img src={img} alt="" className="about-me__img" />
    </>
  );
};

export default About;
