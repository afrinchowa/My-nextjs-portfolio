"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full mx-auto flex items-center justify-between bg-white border-b py-4 px-6 shadow-md">
      <div className="flex items-center space-x-6">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 hover:text-gray-600"
        >
          My Portfolio
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg rounded-md z-10">
          <ul className="space-y-4 p-4 text-center">
            <li>
              <Link href="/" className="text-gray-800 hover:text-teal-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-800 hover:text-teal-500">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-gray-800 hover:text-teal-500">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800 hover:text-teal-500">
                Contact 
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-gray-800 hover:text-teal-500">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6">
        <ul className="flex items-center space-x-6 text-gray-800">
          <li className="hover:text-teal-500">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-teal-500">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-teal-500">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="hover:text-teal-500">
            <Link href="/contact">Contact </Link>
          </li>
          <li className="hover:text-teal-500">
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      {/* User Authentication and Post Blog Button */}
      <div className="flex items-center space-x-4">
        {session?.user? (
          <button
            onClick={() => signOut()}
            className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition duration-200"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-white transition duration-200"
          >
            Login
          </Link>
        )}

        <Link
          href="/blogs/create"
          className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-white transition duration-200"
        >
          Post Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
