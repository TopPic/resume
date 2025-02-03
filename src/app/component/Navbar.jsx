"use client"
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="bg-neutral-900 w-full  sticky top-0 z-50">
        <div className="container mx-auto text-white lg:flex hidden justify-end items-center space-x-10 py-5 font-extralight uppercase">
          <Link
            className="hover:text-sky-300 duration-300 hover:duration-300 active:text-sky-300"
            href="#home" onClick={(e) => handleSmoothScroll(e, "home")}
          >
            Home
          </Link>
          <Link
            className="hover:text-sky-300 duration-300 hover:duration-300 active:text-sky-300"
            href="#about" onClick={(e) => handleSmoothScroll(e, "about")}
          >
            About
          </Link>
          <Link
            className="hover:text-sky-300 duration-300 hover:duration-300 active:text-sky-300"
            href="#experience" onClick={(e) => handleSmoothScroll(e, "experience")}
          >
            Experience
          </Link>
          <Link
            className="hover:text-sky-300 duration-300 hover:duration-300 active:text-sky-300"
            href="#porfirio"  onClick={(e) => handleSmoothScroll(e, "porfirio")}
          >
            Porfirio
          </Link>
          <Link
            className="hover:text-sky-300 duration-300 hover:duration-300 active:text-sky-300"
            href="#contact"  onClick={(e) => handleSmoothScroll(e, "contact")}
          >
            Contact
          </Link>
        </div>
        <div className="lg:hidden flex justify-between w-full">
          <button className="ml-auto p-5 text-4xl" id="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <div
            id="menu"
            className={`${
              isMenuOpen ? "absolute top-[78px] left-0 w-full bg-neutral-800" : "hidden"
            } flex flex-col space-y-4 p-4 z-10 transition-all duration-300 ease-in-out`}
          >
            <a href="#home" className="text-white"  onClick={(e) => handleSmoothScroll(e, "home")}>Home</a>
            <a href="#about" className="text-white"  onClick={(e) => handleSmoothScroll(e, "about")}>About</a>
            <a href="#experience" className="text-white"  onClick={(e) => handleSmoothScroll(e, "experience")}>Experience</a>
            <a href="#porfirio" className="text-white"  onClick={(e) => handleSmoothScroll(e, "porfirio")}>Porfirio</a>
            <a href="#contact"className="text-white"  onClick={(e) => handleSmoothScroll(e, "contact")}>Contact</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
