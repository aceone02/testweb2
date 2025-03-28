import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Modern Landing Page
        </h1>
        <p className="text-gray-600 mb-8">
          Crafted with React and Tailwind CSS for a stunning web experience.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </section>
  )
}

export default Hero
