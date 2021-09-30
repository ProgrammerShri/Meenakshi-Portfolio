import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <a
        href="mailto:meenakshisharma0602@gmail.com"
        id="contact"
        className="footer__link"
      >
        " Connect With Me "
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.instagram.com/meenakshi._.official/"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/meenakshisharma0602/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        {/* <li className="social-list__item">
          <a className="social-list__link" href="https://twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
        </li> */}
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/meenakshi6902"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Footer;
