'use client'
import React, { useState } from 'react';
import { 
  Clock, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  CheckCircle, 
  GraduationCap,
  Users,
  Calendar
} from 'lucide-react';


import ApplicationModal from './ApplicationModal'

const JobDetailsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


  const responsibilities = [
    "Lead the design of user-centered products and features from concept to launch",
    "Create wireframes, prototypes, and high-fidelity designs",
    "Conduct user research and usability testing",
    "Collaborate with developers to ensure design feasibility",
    "Mentor junior designers and provide design direction",
    "Contribute to our design system and documentation"
  ];

  const requirements = [
    "5+ years of experience in product design",
    "Strong portfolio demonstrating UX/UI design skills",
    "Proficiency in Figma, Sketch, or similar design tools",
    "Experience with design systems and component libraries",
    "Excellent communication and presentation skills",
    "Bachelors degree in Design, HCI, or related field"
  ];

  const benefits = [
    "Competitive salary and equity package",
    "Health, dental, and vision insurance",
    "Unlimited PTO policy",
    "Remote work flexibility",
    "Professional development budget",
    "Latest design tools and equipment"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900/20 to-black">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold">Product Designer</h1>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Remote</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>Competitive Salary</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Posted on Jan 28, 2024</span>
              </div>
            </div>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 w-fit mt-4"  onClick={() => setIsModalOpen(true)}>
                
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Job Details */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                We are looking for a talented Product Designer to join our growing team. 
                As a Product Designer, you will work closely with product managers, developers, 
                and stakeholders to create exceptional user experiences that millions of people 
                will use every day. You will have the opportunity to shape our product direction 
                and make a significant impact on our design culture.
              </p>
            </section>

            {/* Key Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Responsibilities</h2>
              <div className="space-y-3">
                {responsibilities.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <div className="space-y-3">
                {requirements.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Benefits & Company Info */}
          <div className="space-y-8">
            {/* Benefits Card */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Benefits & Perks</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Card */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">About the Team</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-300">15-30 team members</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-300">Flexible hours</span>
                </div>
                <p className="text-gray-300 mt-4">
                  Join a diverse and passionate team of creators, innovators, and problem-solvers. 
                  We value collaboration, creativity, and continuous learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Section */}
      <div className="bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-gray-300 mb-8">
              Take the next step in your career and be part of something great.
            </p>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700" onClick={() => setIsModalOpen(true)}>
              Apply for this Position
            </button>
          </div>
        </div>
      </div>
      <ApplicationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle="Product Designer"
      />
    </div>
  );
};

export default JobDetailsPage;