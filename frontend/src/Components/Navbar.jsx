import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-l from-green-500 via-teal-400 to-white text-black p-3 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-3 w-9 object-cover" />
        <h1 className="text-xl font-lato font-bold text-gray-800">My Blog</h1>
      </div>
      <Link to="/posts/create" className="flex items-center space-x-2 text-gray-800 hover:text-teal-600 transition-colors duration-300">
        <MdOutlineAddBox className="text-gray-800 text-3xl" />
        <span className="text-lg">Create Post</span>
      </Link>
    </nav>
  );
};

export default Navbar;



