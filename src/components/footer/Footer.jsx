import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

import "./footer.css";

const links = [
  {
    url: "#",
    children: "Home",
  },
  {
    url: "#about",
    children: "About",
  },
  {
    url: "#experience",
    children: "Experience",
  },
  {
    url: "#portfolio",
    children: "Portfolio",
  },
  {
    url: "#contact",
    children: "Contact",
  },
];

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Hariyono
      </a>

      <ul className="permalinks">
        {links.map(({ url, children }) => (
          <li>
            <a href={url}>{children}</a>
          </li>
        ))}
      </ul>

      {/* <div className="footer__socials">
        <a target="_blank" href="https://www.facebook.com/rio.edger/">
          <FaFacebookF className="footer__social-icon" />
        </a>
        <a target="_blank" href="https://www.instagram.com/hariyono4441/">
          <FiInstagram className="footer__social-icon" />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div> */}
      <div className="footer__copyright">
        <small>&copy; Hariyono, all rights reserved.</small>
      </div>
    </footer>
  );
}
