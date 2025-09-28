import Link from "next/link";

import { FaLinkedin, FaGithub, FaXTwitter, FaCode } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="bg-[var(--rich-black)] text-white px-6 md:px-40 py-6 border-t border-gray-700">
            {/* Main Grid */}
            <div className="grid gap-10 grid-cols-1">
    
                <div className="flex flex-col gap-3 items-center justify-center">
                        {/* Right Section: Social Icons */}
                        <div className="flex space-x-6">
                            <a href="https://linkedin.com/in/harish-chandra-juyal-968aba2a9/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={30}  className="text-2xl md:text-2xl  text-white hover:-translate-y-2.5 ease-in-out duration-300" />
                            </a>
                            <a href="https://github.com/Harish010818" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={30} className="text-2xl md:text-2xl  text-white hover:-translate-y-2.5 ease-in-out  duration-300" />
                            </a>
                            <a href="https://leetcode.com/u/Harish010818" target="_blank" rel="noopener noreferrer">
                                <FaCode size={30} className="text-2xl md:text-2xl  text-white hover:-translate-y-2.5 ease-in-out  duration-300" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter size={30} className="text-2xl md:text-2xl  text-white hover:-translate-y-2.5 ease-in-out  duration-300" />
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
