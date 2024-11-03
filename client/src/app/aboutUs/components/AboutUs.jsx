// "use client";

// import React from 'react';
// import Image from 'next/image';
// import {
//     Monitor,
//     Palette,
//     Brain,
//     Shield,
//     Settings,
//     Cog,
//     Database,
//     Smartphone,
//     Code,
//     BarChart2,
//     Users,
//     Lock,
//     Binary,
//     Menu
// } from 'lucide-react';

// import BackgroundLinesDemoForAboutUs from '../../components/outsideComponents/BackgroundLinesForAboutUs'
// import CardHoverEffectDemo from '../../components/outsideComponents/CardHoverEffectDemo'
// import ContactPage from '../../components/FooterSection/ContactPage'
// import Footer from '../../components/FooterSection/Footer'

// // Team Member Component
// const TeamMember = ({ name, role, location, imageUrl }) => (
//     <div className="w-full md:w-1/2 lg:w-1/3 p-4">
//         <div className="relative rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-sm text-white border border-white/10 hover:border-purple-500/50 transition-all">
//             <div className="aspect-square overflow-hidden rounded-t-lg">
//                 <img 
//                     src={imageUrl} 
//                     alt={name}
//                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
//                 />
//             </div>
//             <div className="p-4">
//                 <h3 className="text-lg font-semibold text-white">{name}</h3>
//                 <p className="text-sm text-gray-400 mb-2">{role}</p>
//                 <div className="flex items-center text-sm text-gray-400">
//                     <svg 
//                         className="w-4 h-4 mr-1" 
//                         fill="none" 
//                         stroke="currentColor" 
//                         viewBox="0 0 24 24"
//                     >
//                         <path 
//                             strokeLinecap="round" 
//                             strokeLinejoin="round" 
//                             strokeWidth={2} 
//                             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
//                         />
//                         <path 
//                             strokeLinecap="round" 
//                             strokeLinejoin="round" 
//                             strokeWidth={2} 
//                             d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
//                         />
//                     </svg>
//                     {location}
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// const ServiceCard = ({ icon: Icon, title, subtitle }) => (
//     <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 border border-white/10 hover:border-purple-500/50 transition-all">
//         <div className="text-purple-400">
//             <Icon size={24} />
//         </div>
//         <div>
//             <h3 className="font-semibold text-white">{title}</h3>
//             {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}
//         </div>
//     </div>
// );

// const AboutUs = () => {
//     const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//     const teamMembers = [
//         {
//             name: "Akshay Kumar",
//             role: "Founder & CEO",
//             location: "London, UK",
//             imageUrl: "/api/placeholder/400/400"
//         },
//         {
//             name: "Vineesh Chandran",
//             role: "Managing Partner",
//             location: "London, UK",
//             imageUrl: "/api/placeholder/400/400"
//         },
//         {
//             name: "Francis Falodun",
//             role: "Mentor Partner",
//             location: "London, UK",
//             imageUrl: "/api/placeholder/400/400"
//         },
//         {
//             name: "Haydn Price",
//             role: "Mentor Partner",
//             location: "London, UK",
//             imageUrl: "/api/placeholder/400/400"
//         },
//         {
//             name: "Sajna Saifudeen",
//             role: "HR & QA Manager",
//             location: "London, UK",
//             imageUrl: "/api/placeholder/400/400"
//         },
//         {
//             name: "Bjorn Van Den Akker",
//             role: "Developer Partner",
//             location: "London, UK",
//             imageUrl: "/api/placeholder/400/400"
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-dark-purple to-black text-white">
//             {/* Navigation */}
//             <nav className="relative flex items-center justify-between p-4 lg:p-6">
//                 <div className="font-bold">
//                     <img
//                         src="https://i.postimg.cc/TYQghNSb/synx-up-01-Yb-N9-XRn8-LOi5-J9-Qb.png"
//                         alt="logo"
//                         className="w-24 lg:w-36 h-auto"
//                     />
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button
//                     className="lg:hidden p-2"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 >
//                     <Menu size={24} />
//                 </button>

//                 {/* Desktop Navigation */}
//                 <div className="hidden lg:flex gap-8">
//                     <NavItem text="Learn" />
//                     <NavItem text="Build" />
//                     <NavItem text="Network" />
//                     <NavItem text="Community" />
//                 </div>

//                 {/* Mobile Navigation Menu */}
//                 {isMenuOpen && (
//                     <div className="absolute top-full left-0 right-0 bg-black/95 py-4 lg:hidden">
//                         <div className="flex flex-col items-center gap-4">
//                             <NavItem text="Learn" />
//                             <NavItem text="Build" />
//                             <NavItem text="Network" />
//                             <NavItem text="Community" />
//                         </div>
//                     </div>
//                 )}
//             </nav>

//             {/* Hero Section */}
//             <main className="flex flex-col items-center justify-center text-center px-4 pt-[-19px] pb-4">
//                 <BackgroundLinesDemoForAboutUs />
//             </main>

//             <div className='m-44 rounded-2xl mt-1 p-10 bg-gray-900'>
//                 <h1 className='flex justify-center items-center font-semibold text-[40px] text-orange-400'>Our History</h1>
//                 <div className='p-10'>
//                     <p className='font-serif text-[17px]'>
//                         Synx was created to change how business services work. We focus on bringing new and efficient solutions to help modern companies. SynxUP was started to make sure development services are fairly priced and transparent, aiming to stop overcharging in the industry.
//                     </p>
//                 </div>
//             </div>

//             <div className='m-44 rounded-2xl mt-[-90px] p-10 bg-gray-900'>
//                 <h1 className='flex justify-center items-center font-semibold text-[40px] text-orange-400'>Culture and Team</h1>
//                 <div className='p-10'>
//                     <p className='font-serif text-[17px]'>
//                         At Synx, we strive for excellence and innovation. We create an environment where creativity and teamwork flourish. Our team, with diverse expertise, shares a commitment to our goals. At SynxUP, we value honesty, transparency, and fairness, ensuring our work sets new ethical standards in the industry.
//                     </p>
//                 </div>
//             </div>

//             {/* Team Members Section */}
//             <div className='mx-44 mt-[-90px] mb-20'>
//                 <h1 className='flex justify-center items-center font-semibold text-[40px] text-orange-400 mb-10'>Our Team</h1>
//                 <div className="flex flex-wrap justify-center -mx-4">
//                     {teamMembers.map((member) => (
//                         <TeamMember
//                             key={member.name}
//                             name={member.name}
//                             role={member.role}
//                             location={member.location}
//                             imageUrl={member.imageUrl}
//                         />
//                     ))}
//                 </div>
//             </div>

//             <ContactPage />
//             <Footer />
//         </div>
//     );
// };

// // Helper Components
// const NavItem = ({ text }) => (
//     <div className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition-colors">
//         {text}
//         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//     </div>
// );

// const PartnerLogo = ({ src, alt }) => (
//     <div className="h-6 md:h-8 w-20 md:w-24 relative">
//         <img src={src} alt={alt} className="object-contain w-full h-full" />
//     </div>
// );

// const Stat = ({ number, text, color }) => (
//     <div className="relative text-center">
//         <span className={`text-3xl md:text-4xl font-bold text-${color}-500`}>{number}</span>
//         <p className="text-sm text-gray-400 uppercase">{text}</p>
//     </div>
// );

// export default AboutUs;

'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Monitor, Palette, Brain, Shield, Settings, Cog, Database,
    Smartphone, Code, BarChart2, Users, Lock, Binary, Menu
} from 'lucide-react';
import BackgroundLinesDemoForAboutUs from '../../components/outsideComponents/BackgroundLinesForAboutUs';
import CardHoverEffectDemo from '../../components/outsideComponents/CardHoverEffectDemo';
import ContactPage from '../../components/FooterSection/ContactPage';
import Footer from '../../components/FooterSection/Footer';

// Animation variants remain the same
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

// Updated TeamMember component with responsive classes
const TeamMember = ({ name, role, location, imageUrl, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div 
            className="w-full sm:w-1/2 lg:w-1/3 p-2 md:p-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2 }}
        >
            <div 
                className="relative rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-sm text-white border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="aspect-square overflow-hidden rounded-t-lg">
                    <motion.img 
                        src={imageUrl} 
                        alt={name}
                        className="w-full h-full object-cover grayscale transition-all duration-500"
                        animate={{
                            scale: isHovered ? 1.1 : 1,
                            grayscale: isHovered ? 0 : 1
                        }}
                    />
                </div>
                <motion.div className="p-4">
                    <h3 className="text-lg font-semibold text-white">{name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{role}</p>
                    <div className="flex items-center text-sm text-gray-400">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {location}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

// Service Card and NavItem components remain the same
const ServiceCard = ({ icon: Icon, title, subtitle }) => (
    <motion.div 
        className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
    >
        <motion.div 
            className="text-purple-400"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
        >
            <Icon size={24} />
        </motion.div>
        <div>
            <h3 className="font-semibold text-white">{title}</h3>
            {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}
        </div>
    </motion.div>
);

const NavItem = ({ text }) => (
    <motion.div 
        className="flex items-center gap-1 cursor-pointer hover:text-purple-400 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {text}
        <motion.svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ rotate: [0, 180, 0] }}
            transition={{ duration: 0.5 }}
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
    </motion.div>
);

const AboutUs = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const teamMembers = [
        {
            name: "Akshay Kumar",
            role: "Founder & CEO",
            location: "London, UK",
            imageUrl: "https://i.postimg.cc/9FFPJ1jq/Whats-App-Image-2024-07-26-at-19-47-41.jpg"
        },
        {
            name: "Sajna Saifudeen",
            role: "HR & QA MANAGER",
            location: "London, UK",
            imageUrl: "https://i.postimg.cc/hvK8F1z6/Whats-App-Image-2024-07-26-at-19-38-20.jpg"
        },
        {
            name: "Vineesh",
            role: "Managing partner",
            location: "Kerala, India",
            imageUrl: "https://i.postimg.cc/T2cqVFB6/Whats-App-Image-2024-07-24-at-08-23-13.jpg"
        },
        {
            name: "Haydn Price",
            role: "MENTOR PARTNER",
            location: "London, UK",
            imageUrl: "https://i.postimg.cc/15JBQ2KH/jjjjjjjjjjj.jpg"
        },
        {
            name: "Akbar Haleel",
            role: "DEVELOPER PARTNER",
            location: "Kerala, India",
            imageUrl: "https://i.postimg.cc/X7CNS63M/Screenshot-2024-11-03-204949.png"
        },
        {
            name: "Kripa Raj P",
            role: "DEVELOPER PARTNER",
            location: "London, UK",
            imageUrl: "https://i.postimg.cc/Bv6QzLnp/20240112-112627nnn.jpg"
        },
        {
            name: "Bjorn Van Den Akker",
            role: "DEVELOPER PARTNER",
            location: "London, UK",
            imageUrl: "https://i.postimg.cc/rwH9d43R/Shoot-Bjorn-6782-min-1024x683-1.jpg"
        },
        {
            name: "Francis Falodun",
            role: "MENTOR PARTNER",
            location: "London, UK",
            imageUrl: "https://i.postimg.cc/NjF4fDJw/V1-CE-Shopify-2-4.jpg"
        },
        {
            name: "Moumitha",
            role: "SENIOR MARKETER",
            location: "Kerala, India",
            imageUrl: "https://i.postimg.cc/G2FPS52v/Moumitha-marketer.jpg"
        },
        {
            name: "Suman",
            role: "CONSULTANT",
            location: "Kerala, India",
            imageUrl: "https://i.postimg.cc/mrFy7DWX/1000096785.jpg"
        },
        {
            name: "Krishna kanta",
            role: "CONSULTANT",
            location: "Kerala, India",
            imageUrl: "https://i.postimg.cc/9M5tbhWW/Whats-App-Image-2024-07-24-at-08-09-24.jpg"
        },
      
   
    ];

    return (
        <motion.div 
            className="min-h-screen bg-gradient-to-br from-black via-dark-purple to-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Navigation */}
            <nav className="relative flex items-center justify-between p-4 lg:p-6">
                <motion.div 
                    className="font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="https://i.postimg.cc/TYQghNSb/synx-up-01-Yb-N9-XRn8-LOi5-J9-Qb.png"
                        alt="logo"
                        className="w-20 lg:w-36 h-auto" // Adjusted logo size for mobile
                    />
                </motion.div>

                {/* Mobile menu button */}
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
                    <div className="absolute top-full left-0 right-0 bg-black/95 py-4 lg:hidden z-50">
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
                <BackgroundLinesDemoForAboutUs />
            </main>

        {/* History Section */}
<motion.div 
    className="mx-4 md:mx-44 md:my-16 rounded-2xl mt-1 p-4 md:p-10 bg-gray-900"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
>
    <motion.h1 
        className="flex justify-center items-center font-semibold text-2xl md:text-[40px] text-orange-400"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
    >
        Our History
    </motion.h1>
    <motion.div className="p-4 md:p-10" variants={fadeInUp}>
        <p className="font-serif text-base md:text-[17px]">
            Synx was created to change how business services work. We focus on bringing new and efficient solutions to help modern companies. SynxUP was started to make sure development services are fairly priced and transparent, aiming to stop overcharging in the industry.
        </p>
    </motion.div>
</motion.div>

{/* Culture Section */}
<motion.div 
    className="mx-4 md:mx-44 mt-8 md:mt-16 rounded-2xl p-4 md:p-10 bg-gray-900"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
>
    <motion.h1 
        className="flex justify-center items-center font-semibold text-2xl md:text-[40px] text-orange-400"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
    >
        Culture and Team
    </motion.h1>
    <motion.div className="p-4 md:p-10" variants={fadeInUp}>
        <p className="font-serif text-base md:text-[17px]">
            At Synx, we strive for excellence and innovation. We create an environment where creativity and teamwork flourish. Our team, with diverse expertise, shares a commitment to our goals. At SynxUP, we value honesty, transparency, and fairness, ensuring our work sets new ethical standards in the industry.
        </p>
    </motion.div>
</motion.div>

{/* Team Members Section */}
<motion.div 
    className="mx-4 md:mx-44 mt-8 md:mt-16 mb-20"
    variants={staggerChildren}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
>
    <motion.h1 
        className="flex justify-center items-center font-semibold text-2xl md:text-[40px] text-orange-400 mb-6 md:mb-10"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
    >
        Our Team
    </motion.h1>
    <div className="flex flex-wrap justify-center -mx-2 md:-mx-4">
        {teamMembers.map((member, index) => (
            <TeamMember
                key={member.name}
                {...member}
                index={index}
            />
        ))}
    </div>
</motion.div>

            <ContactPage />
            <Footer />
        </motion.div>
    );
};

export default AboutUs;