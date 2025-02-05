import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are pioneers in AI technology, dedicated to transforming businesses through innovative solutions and cutting-edge artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with AI-driven solutions that drive growth, efficiency, and innovation in the digital age.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-gray-600">
              A diverse group of AI experts, developers, and business strategists working together to deliver exceptional results.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To lead the AI revolution by creating innovative solutions that shape the future of technology and business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;