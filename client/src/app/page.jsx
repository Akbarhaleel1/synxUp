"use client";

import React from 'react';
import Image from 'next/image';
import {
  Monitor,
  Palette,
  Brain,
  Shield,
  Settings,
  Cog,
  Database,
  Smartphone,
  Code,
  BarChart2,
  Users,
  Lock,
  Binary,
  Menu
} from 'lucide-react';

import BackgroundLinesDemo from './components/outsideComponents/BackgroundLinesDemo'
import CardHoverEffectDemo from './components/outsideComponents/CardHoverEffectDemo'
import ContactPage from './components/FooterSection/ContactPage'
import Footer from './components/FooterSection/Footer'



import { motion } from 'framer-motion';

const FloatingImage = ({ src, className }) => (
  <motion.img
    src={src}
    className={`absolute ${className}`}
    animate={{
      y: [0, -20, 0],
      rotate: [-2, 2, -2],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    alt="Decorative floating element"
  />
);

const Stat = ({ number, text, color }) => {
  const colorMap = {
    purple: "from-purple-500 to-purple-700",
    green: "from-green-500 to-green-700",
    yellow: "from-yellow-500 to-yellow-700"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-lg relative overflow-hidden group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[color]} opacity-10 group-hover:opacity-20 transition-opacity`} />
      <h3 className="text-4xl font-bold mb-2">{number}</h3>
      <p className="text-gray-300">{text}</p>
    </motion.div>
  );
};


const ServiceCard = ({ icon: Icon, title, subtitle }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 border border-white/10 hover:border-purple-500/50 transition-all">
    <div className="text-purple-400">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-semibold text-white">{title}</h3>
      {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}
    </div>
  </div>
);

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    { icon: Monitor, title: 'Frontend' },
    { icon: Palette, title: 'UI/UX' },
    { icon: Brain, title: 'AI and ML Engineers', subtitle: 'Deep Learning/Machine Vision/NLP' },
    { icon: Shield, title: 'Application Security' },
    { icon: Settings, title: 'Fullstack Projects' },
    { icon: Cog, title: 'DevOps + DevSecOps' },
    { icon: Database, title: 'Data Science' },
    { icon: Smartphone, title: 'iOS and Android Developing' },
    { icon: Palette, title: 'UI/UX' },
    { icon: Code, title: 'PHP Developing' },
    { icon: BarChart2, title: 'Project Managing' },
    { icon: Users, title: 'Solution Architects' },
    { icon: Monitor, title: 'QA' },
    { icon: Code, title: 'Wordpress CMS Developing' },
    { icon: BarChart2, title: 'Business Analysing' },
    { icon: Users, title: 'Tech Leads / Team Leads' },
    { icon: Smartphone, title: 'Mobile App Developing' },
    { icon: Lock, title: 'Information Security' },
    { icon: Code, title: 'Golang Deving' },
    { icon: Database, title: 'Database admin' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-dark-purple to-black text-white">
      {/* Navigation */}
      <nav className="relative flex items-center justify-between p-4 lg:p-6">
        <div className="font-bold">
          <img
            src="https://i.postimg.cc/TYQghNSb/synx-up-01-Yb-N9-XRn8-LOi5-J9-Qb.png"
            alt="logo"
            className="w-24 lg:w-36 h-auto"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          <NavItem text="Learn" />
          <NavItem text="Build" />
          <NavItem text="Network" />
          <NavItem text="Community" />
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 py-4 lg:hidden">
            <div className="flex flex-col items-center gap-4">
              <NavItem text="Learn" />
              <NavItem text="Build" />
              <NavItem text="Network" />
              <NavItem text="Community" />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 pt-[-19px] pb-4">
        <BackgroundLinesDemo />
      </main>

      {/* Partners Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-center text-sm text-blue-400 mb-8">
          POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8 items-center justify-items-center opacity-70">
          {/* Partner logos */}
          <PartnerLogo src="https://i.postimg.cc/Zq6df7dc/pngwing-com-8.png" alt="Brave" />
          <PartnerLogo src="https://i.postimg.cc/90QwQcN8/pngwing-com-6.png" alt="Circle" />
          <PartnerLogo src="https://i.postimg.cc/Cx38sTz5/pngwing-com-5.png" alt="Discord" />
          <PartnerLogo src="https://i.postimg.cc/cHZ8PR7N/pngwing-com-4.png" alt="Google" />
          <PartnerLogo src="https://i.postimg.cc/xjtVJLdp/pngwing-com-9.png" alt="Jump" />
          <PartnerLogo src="https://i.postimg.cc/gjtXw1CY/pngwing-com-1.png" alt="Lollapalooza" />
          <PartnerLogo src="https://i.postimg.cc/RCgnbnNj/pngwing-com.png" alt="Magic Eden" />
          <PartnerLogo src="https://i.postimg.cc/RCgnbnNj/pngwing-com.png" alt="Magic Eden" />
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-16 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#260AFC]">
            What we do?
          </h2>
          <p className="text-gray-300 text-center mb-8 md:mb-16 max-w-3xl mx-auto px-4">
            From UI/UX Design to Scalable Cloud Solutions  Empowering Every Stage of Your Digital Journey
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
              />
            ))}
          </div>
        </div>
      </div>

      {/* What Us Section */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#260AFC]">
            What us?
          </h2>
          <p className="text-gray-300 text-center mb-8 md:mb-16 max-w-3xl mx-auto">
            Your Software Your Budget We are flexible for every budget and project
          </p>

          {/* Feature Cards */}
          <div className="space-y-8">
            {/* First Feature Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-4xl bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="relative h-64 md:h-80">
                <Image
                  src="https://i.postimg.cc/XYhMdNLy/pexels-olia-danilevich-4974912.jpg"
                  alt="Developer coding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Low in Budget but Better in Quality
                </h3>
                <p className="text-gray-300 mb-6">
                  With our global team using our DNA of Lean and Agile methods, we deliver the best output cost-effectively. No compromise in quality!
                </p>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  Learn more
                </button>
              </div>
            </div>

            {/* Second Feature Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-4xl bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="relative h-64 md:h-80 md:order-last">
                <Image
                  src="https://i.postimg.cc/dtsKKxDD/pexels-olia-danilevich-4974920.jpg"
                  alt="Developer coding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Low in Budget but Better in Quality
                </h3>
                <p className="text-gray-300 mb-6">
                  With our global team using our DNA of Lean and Agile methods, we deliver the best output cost-effectively. No compromise in quality
                </p>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-16 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-500 to-blue-600 text-transparent bg-clip-text">
            What we do?
          </h2>
          <p className="text-gray-400 text-center mb-8 md:mb-16 max-w-3xl mx-auto">
            From UI/UX Design to Scalable Cloud Solutions – Empowering Every Stage of Your Digital Journey
          </p>
          <CardHoverEffectDemo />
        </div>
      </div>

      {/* Stats and CTA section */}
      <div className="bg-black/95 text-white px-4 py-1 overflow-hidden relative min-h-screen">
        {/* Floating Images with reduced opacity */}
        <div className="absolute inset-0">
          {/* <img
            src="https://i.postimg.cc/vBtSqGrh/pexels-thisisengineering-3861969.jpg"
            className="absolute top-20 left-10 w-32 h-32 opacity-10"
            alt="floating decoration"
          />
          <img
            src="https://i.postimg.cc/XYhMdNLy/pexels-olia-danilevich-4974912.jpg"
            className="absolute top-40 right-20 w-24 h-24 opacity-10"
            alt="floating decoration"
          />
          <img
            src="https://i.postimg.cc/13bT4CRG/pexels-divinetechygirl-1181279.jpg"
            className="absolute bottom-40 left-1/4 w-20 h-20 opacity-10"
            alt="floating decoration"
          /> */}
        </div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-14 font-bold text-center"
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Join a thriving community.
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <StatCard number="100+" text="PROJECTS COMPLETED" color="purple" />
            <StatCard number="250+" text="EMPLOYEES WE HAVE" color="blue" />
            <StatCard number="20+" text="ON GOING PROJECTS" color="indigo" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto relative px-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl -z-10" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-100">
              It is time to bring your dream project to life with us! Our powerful team is here to make it happen.
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg"
            >
              START BUILDING
            </motion.button>
          </motion.div>
        </div>
      </div>
      <ContactPage />
      <Footer />
    </div>
  );
};

// Helper Components
const NavItem = ({ text }) => (
  <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition-colors">
    {text}
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);

const PartnerLogo = ({ src, alt }) => (
  <div className="h-6 md:h-8 w-20 md:w-24 relative">
    <img src={src} alt={alt} className="object-contain w-full h-full" />
  </div>
);


const StatCard = ({ number, text, color }) => {
  const gradients = {
    purple: 'from-purple-500 to-purple-400',
    blue: 'from-blue-500 to-blue-400',
    indigo: 'from-indigo-500 to-indigo-400'
  };

  return (
    <div className="p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800">
      <h3 className={`text-4xl font-bold mb-2 bg-gradient-to-r ${gradients[color]} text-transparent bg-clip-text`}>
        {number}
      </h3>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
};
// const Stat = ({ number, text, color }) => (
//   <div className="relative text-center">
//     <span className={`text-3xl md:text-4xl font-bold text-${color}-500`}>{number}</span>
//     <p className="text-sm text-gray-400 uppercase">{text}</p>
//   </div>
// );

export default LandingPage;