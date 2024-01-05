import { Link } from "react-scroll";
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./img/logo.svg" alt="portfolio" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="mainSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="ContactMe"
                className="text-md"
              >
                Contact Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div className="social-media-icons">
            <a href="https://github.com/mokhtarchennouf811">
              <FaGithub style={{ fontSize: '32px', marginRight: '15px' }} />
            </a>
            <a href="https://linkedin.com/in/mokhtar-chennouf-183509244/">
              <FaLinkedin style={{ fontSize: '32px', marginRight: '15px' }} />
            </a>
            <a href="https://facebook.com/your-facebook-profile">
              <FaFacebook style={{ fontSize: '32px', marginRight: '15px' }} />
            </a>
            <a href="https://instagram.com/mc.store.dz/?next=%2F">
              <FaInstagram style={{ fontSize: '32px', marginRight: '15px' }} />
            </a>
          </div>
      </div>
      <hr className="divider" />
    </footer>
  );
}

export default Footer;
