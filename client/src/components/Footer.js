import Link from "next/link";

import { FaLinkedin, FaGithub, FaXTwitter, FaCode } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="bg-[var(--dark-green)] text-white px-6 md:px-40 py-6 border-t border-gray-700">
            {/* Main Grid */}
            <div className="grid gap-10 grid-cols-1">
                
                {/* Left Section: Links */}  
                <div className="gap-2.5 tracking-widest grid grid-cols-1">
                    <Link href="/Intake/"  className="text-xs hover:underline">Complete intake</Link> 
                    <Link href="/Privacy/" className="text-xs hover:underline">Privacy Policy</Link>      
                </div>

                 

                <div className="flex flex-col gap-3 items-center justify-center">
                        {/* Right Section: Social Icons */}
                        <div className="flex space-x-6">
                            <a href="https://linkedin.com/in/harish-chandra-juyal-968aba2a9/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl md:text-2xl text-white hover:text-blue-500 hover:scale-125 transition-all duration-300" />
                            </a>
                            <a href="https://github.com/Harish010818" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl md:text-2xl text-white hover:text-white hover:scale-125 transition-all duration-300" />
                            </a>
                            <a href="https://leetcode.com/u/Harish010818" target="_blank" rel="noopener noreferrer">
                                <FaCode className="text-2xl md:text-2xl text-white hover:text-yellow-400 hover:scale-125 transition-all duration-300" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className="text-2xl md:text-2xl text-white hover:text-white hover:scale-125 transition-all duration-300" />
                            </a>
                        </div>

                        {/* Center Section: Copyright */}
                        <p className="text-sm text-gray-400 tracking-wide">
                            &copy; {new Date().getFullYear()} All rights reserved.
                        </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
