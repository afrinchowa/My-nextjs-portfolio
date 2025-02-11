import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1d29] text-white py-10 mt-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-6">
          <a
            href="https://github.com/afrinchowa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#49d9d3] mx-4 text-3xl hover:text-[#28b6b3]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/moriom-afrin-chowa-7b44a3273"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#49d9d3] mx-4 text-3xl hover:text-[#28b6b3]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/arfin.ayra.1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#49d9d3] mx-4 text-3xl hover:text-[#28b6b3]"
          >
            <FaTwitter />
          </a>
        </div>
        <p className="text-sm text-gray-400 mb-2">
          &copy; {new Date().getFullYear()} Chowa.. All Rights Reserved.
        </p>
        <p className="text-sm text-gray-400">Designed & Developed by Chowa.</p>
      </div>
    </footer>
  );
};

export default Footer;
