import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-6">
              We are a team of passionate developers dedicated to creating
              high-quality web solutions. Our mission is to provide innovative
              and user-friendly products that solve real-world problems.
            </p>
            <p className="text-gray-600">
              Learn more about our journey and our commitment to excellence.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da46c918?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY5MjYwNzQzNA&ixlib=rb-4.0.3&q=80&w=600"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
