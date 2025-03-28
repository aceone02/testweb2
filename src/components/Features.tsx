import { CheckCircle, Code, Rocket } from 'lucide-react'
import React from 'react'

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="p-4 bg-gray-100 rounded-lg inline-block mb-4">
              <Rocket className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fast &amp; Efficient</h3>
            <p className="text-gray-600">
              Experience lightning-fast performance and efficiency.
            </p>
          </div>
          <div>
            <div className="p-4 bg-gray-100 rounded-lg inline-block mb-4">
              <Code className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Clean Code</h3>
            <p className="text-gray-600">
              Built with clean, maintainable, and well-documented code.
            </p>
          </div>
          <div>
            <div className="p-4 bg-gray-100 rounded-lg inline-block mb-4">
              <CheckCircle className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fully Featured</h3>
            <p className="text-gray-600">
              Packed with all the features you need to succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
