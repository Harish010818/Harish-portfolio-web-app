"use client"; // For Next.js client component

import { scrollToSection } from "@/utils/scrollToSection";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" }
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigation = (id) => {
    if(isOpen){
       setIsOpen(false); 
    }

    if (activeSection === id) return; // Agar same section pe click ho toh kuch mat karo
         setActiveSection(id); // Active section update karo
         scrollToSection(id); // Sirf naye section pe scroll karo
  }


  return (
    <header className="fixed flex px-6 gap-4 md:gap-40 items-center md:px-40 py-5 md:fixed bg-white right-0 left-0 z-30">
      
      {/* Logo */}
      <h1 className="text-xl md:text-3xl font-bold">HARISH CHANDRA JUYAL</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6">

      <ul className="flex space-x-6 text-gray-600 font-semibold tracking-widest">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer relative pb-1.5 text-gray-600 transition-colors duration-300 hover:text-[var(--office-green)] 
                          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
                          after:bg-[var(--office-green)] after:scale-x-0 after:origin-bottom after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                <Link href={`/#${item.id}`} onClick={() => handleNavigation(item.id)}>
                  {item.label}
                </Link>
              </li>
            ))}
      </ul>


       <button
        className="px-8 py-3 border-2 border-black text-black font-bold hover:bg-[var(--office-green)] hover:text-white hover:border-[var(--office-green)] transition"
        >
        <Link href="/#contact">CONTACT</Link>  
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
            size={20}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

     

      {/* Mobile Menu */}
      {isOpen && (

        <nav className="fixed top-0 left-0 w-full h-screen  bg-white flex flex-col items-center space-y-6 shadow-md">
          <FiX
            size={28}
            className="absolute top-6 right-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <ul className="mt-10 text-lg  w-60 font-semibold text-gray-600">
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
          <button className="py-3 w-60 border-2 border-black text-black font-bold hover:bg-black hover:text-white transition">
            <Link href="/#contact" onClick={() => setIsOpen(false)}>CONTACT</Link>   
          </button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
