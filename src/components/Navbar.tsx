import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800 flex items-center">
          <a href="#" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layers"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-2">YourBrand</span>
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-gray-800">
            Features
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-800">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 px-6 py-3">
          <div className="grid grid-cols-1 gap-y-2">
            <a href="#features" className="block py-2 text-gray-600 hover:text-gray-800">
              Features
            </a>
            <a href="#about" className="block py-2 text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#contact" className="block py-2 text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
