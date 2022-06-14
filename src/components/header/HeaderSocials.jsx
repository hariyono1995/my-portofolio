import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/hariyono-b001b813b/" target="_blank">
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/hariyono1995?tab=repositories"
        target="_blank"
      >
        <BsGithub />
      </a>
    </div>
  );
}
