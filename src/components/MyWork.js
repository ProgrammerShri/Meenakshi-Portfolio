import React from "react";
import Pic1 from "../img/Pic1.jpg";
import Pic2 from "../img/Pic2.jpg";
import Pic3 from "../img/Pic3.jpg";
import Pic4 from "../img/Pic4.jpg";
import Pic5 from "../img/Pic5.jpg";
import Pic6 from "../img/Pic6.jpg";
import Pic7 from "../img/Pic7.jpg";

import "../styles/MyWork.css";

const MyWork = () => {
  return (
    <>
      <h2 className="section__title">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        <a href="#portfolio" className="portfolio__item">
          <img src={Pic1} alt="" className="portfolio__img" />
        </a>

        <div className="box_col">
          <a href="#portfolio" className="portfolio__item">
            <img src={Pic6} alt="" className="portfolio__img" />
          </a>
          <a href="#portfolio" className="portfolio__item">
            <img src={Pic7} alt="" className="portfolio__img" />
          </a>
        </div>

        <a href="#portfolio" className="portfolio__item">
          <img src={Pic2} alt="" className="portfolio__img" />
        </a>
        <a href="#portfolio" className="portfolio__item">
          <img src={Pic3} alt="" className="portfolio__img" />
        </a>
        <a href="#portfolio" className="portfolio__item">
          <img src={Pic4} alt="" className="portfolio__img" />
        </a>
        <a href="#portfolio" className="portfolio__item">
          <img src={Pic5} alt="" className="portfolio__img" />
        </a>
      </div>
    </>
  );
};

export default MyWork;
