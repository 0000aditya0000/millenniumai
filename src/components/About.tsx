import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-10 bg-[#0E0C15]">

      <div className='w-[300px] h-[300px] z-5 absolute left-60 top-48 bg-[#1B1640] bg-gradient-to-r from-[#1B1640] to-transparent blur-3xl'>

      </div>

      <div className='w-[300px] h-[300px] z-5 absolute right-60 bottom-0 bg-[#1B1640] bg-gradient-to-r from-[#1B1640] to-transparent blur-3xl'>

                    </div>

      <div className="container z-10 mx-auto px-4">
        <div className="text-center z-10 mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We are pioneers in AI technology, dedicated to transforming businesses through innovative solutions and cutting-edge artificial intelligence.
          </p>
        </div>


        <div className="grid z-10 md:grid-cols-3  gap-8">
          <div className="bg-[#0e0c15] z-10 shadow-lg shadow-gray-900 hover:shadow-2xl transition-shadow duration-300 ease-in-out p-8 rounded-xl ">
            <div className="bg-[#161320] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with AI-driven solutions that drive growth, efficiency, and innovation in the digital age.
            </p>
          </div>

          <div className="bg-[#0e0c15] z-10 shadow-lg shadow-gray-900 hover:shadow-2xl transition-shadow duration-300 ease-in-out p-8 rounded-xl ">
            <div className="bg-[#161320] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-gray-600">
              A diverse group of AI experts, developers, and business strategists working together to deliver exceptional results.
            </p>
          </div>

          <div className="bg-[#0e0c15] z-10 shadow-lg shadow-gray-900 hover:shadow-2xl transition-shadow duration-300 ease-in-out p-8 rounded-xl ">
            <div className="bg-[#161320] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
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