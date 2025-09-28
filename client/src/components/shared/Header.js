"use client"; // For Next.js client component

import { GoArrowUpRight } from "react-icons/go";

import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" }
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigation = (id) => {
    if (isOpen) {
      setIsOpen(false);
    }

    if (activeSection === id) return;
    setActiveSection(id);
    scrollToSection(id);
  }


  return (
    <header className="fixed flex px-6 gap-34 sm:gap-96 md:gap-64 items-center  md:px-40 py-5 md:fixed bg-white  right-0 left-0 z-30 shadow shadow-gray-200">

      {/* Logo */}
      <Link href="/" onClick={() => handleNavigation("home")}>
           <h1 className="text-2xl md:text-4xl font-bold cursor-pointer">Harish Juyal</h1>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6">

        <ul className="flex space-x-6 text-gray-600 font-semibold tracking-widest">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer relative pb-1.5 text-gray-600 transition-colors duration-300 hover:text-[var(--rich-black)] 
                          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
                          after:bg-[var(--rich-black)] after:scale-x-0 after:origin-bottom after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              <Link href={`/#${item.id}`} onClick={() => handleNavigation(item.id)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>



        <button
          className="flex items-center gap-1 px-8 py-3 border-2 bg-[var(--rich-black)] rounded-2xl text-white font-medium hover:bg-gray-200  transition"
        >
          <Link
            href="/#contact"
            onClick={() => handleNavigation("contact")}
            className="flex items-center gap-1"
          >
            Contact
            <GoArrowUpRight size={23} />
          </Link>
        </button>
      </nav>


      {/* Hamburger Menu Button */}
      <div className="md:hidden">
        {isOpen ? (
          <FiX
            size={22}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <FiMenu
            size={22}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>



      {/* Mobile Menu */}
      {isOpen && (

        <nav className="fixed top-0 left-0 w-full h-screen  bg-white flex flex-col items-center space-y-8 shadow-md px-6">
          <FiX
            size={28}
            className="absolute top-6 right-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <ul className="mt-10 text-lg  w-full font-semibold text-gray-600">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="py-3 border-b text-left cursor-pointer hover:text-black"
              >
                <Link href={`/#${item.id}`} onClick={() => handleNavigation(item.id)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="py-3 w-full font-bold bg-black text-white">
            <Link href="/#contact" onClick={() => handleNavigation("contact")}>CONTACT</Link>
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
