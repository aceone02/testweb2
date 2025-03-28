import React from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gray-300">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
