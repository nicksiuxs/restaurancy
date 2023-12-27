import React from "react";

function Footer() {
  return (
    <footer className="text-center leading-[3rem] opacity-70">
      © {new Date().getFullYear()} Restaurancy edited by{" "}
      <a href="https://github.com/nicksiuxs" rel="noopener" target="_blank">
        @nicksiuxs
      </a>
    </footer>
  );
}

export default Footer;
