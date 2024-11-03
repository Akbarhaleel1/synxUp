import React from 'react';
import Link from 'next/link';
import { Clock, Users, LineChart, Shield } from 'lucide-react';
import Footer from '../../components/FooterSection/Footer';

const CareersPage = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Hours",
      description: "Work on your own schedule with our flexible timing policy",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Spirit",
      description: "Join a collaborative and supportive work environment",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Growth Opportunities",
      description: "Clear career progression paths and learning opportunities",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Benefits",
      description: "Comprehensive health and retirement benefits package",
    },
  ];

  const openings = [
    {
      role: "Product Designer",
      location: "Remote",
      type: "Full-time",
      date: "2024-01-28",
      slug: "careerDetails", 
    },
    {
      role: "App Developer",
      location: "Remote",
      type: "Full-time",
      date: "2024-02-15",
      slug: "careerDetails",
    },
    {
      role: "UI Developer",
      location: "Remote",
      type: "Full-time",
      date: "2024-03-01",
      slug: "careerDetails",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold mb-4">Join Us</h1>
          <p className="text-gray-400 mb-8">
            If you enjoy a good challenge and productive partnerships we had love to hear from you.
            Check our open positions or drop us a line.
          </p>
          <div className="space-x-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
              Apply Now
            </button>
            <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Why You Should Join Our Awesome Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-lg border border-gray-800 hover:border-purple-600">
                <div className="mb-4 text-purple-600">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Openings Section */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Career Openings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-800">
                <tr>
                  <th className="text-left py-4">Job Position</th>
                  <th className="text-left py-4">Location</th>
                  <th className="text-left py-4">Type</th>
                  <th className="text-left py-4">Posted On</th>
                </tr>
              </thead>
              <tbody>
                {openings.map((job, index) => (
                  <tr key={index} className="border-b border-gray-800 hover:bg-gray-900">
                    <td className="py-4 text-purple-600">
                      <Link href={`/${job.slug}`}>
                        {job.role}
                      </Link>
                    </td>
                    <td className="py-4">{job.location}</td>
                    <td className="py-4">{job.type}</td>
                    <td className="py-4">{job.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareersPage;
