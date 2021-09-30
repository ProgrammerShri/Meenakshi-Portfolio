import React from "react";

import "../styles/Service.css";

const Service = () => {
  return (
    <>
      <h2 className="section__title section__title--services">What I do?</h2>
      <div className="services">
        <div className="service">
          <h3>Graphic Design</h3>
          <p>
            I as a designer create visual concepts, using computer software or
            by hand, to communicate ideas that inspire, inform, and captivate
            consumers. I develop the overall layout and production design for
            applications such as advertisements, brochures, magazines, and
            reports.
          </p>
        </div>

        <div className="service">
          <h3>Illustrations</h3>
          <p>
            Working with images to construct visual displays for clients. I can
            work as an illustrator artist to create layouts using computer
            software, may draw or paint images and upload them to make digital
            copies.
          </p>
        </div>

        <div className="service">
          <h3>Branding</h3>
          <p>
            I'm likely able to create fantastic illustrations, logos, posters
            and pamphlets. I can test multiple permutations of layout, color,
            typography, and visual effects quickly. Searching for the most
            effective combination thereof.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">
        See My Work
      </a>
    </>
  );
};

export default Service;
