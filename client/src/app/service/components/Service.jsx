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

import BackgroundLinesForService from '../../components/outsideComponents/BackgroundLinesForService'
import CardHoverEffectDemo from '../../components/outsideComponents/CardHoverEffectDemo'
import ContactPage from '../../components/FooterSection/ContactPage'
import Footer from '../../components/FooterSection/Footer'

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeCategory, setActiveCategory] = React.useState('All');

    const categories = [
        'All', 'Frontend', 'Backend', 'Frameworks', 'Mobile App', 'Database',
        'Google', 'Data Science', 'Machine Learning', 'DevOps', 'CMS', 'ECommerce', 'Security'
    ];

    const technologies = [
        {
            name: 'JavaScript',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/python-programming-language-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--html-application-languages-logos-pack-animations-5332669.gif',
            category: 'Frontend'
        },
        {
            name: 'React',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/go-programming-language-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--golang-software-code-pack-logos-animations-9767983.gif',
            category: 'Frontend'
        },
        {
            name: 'Vue.js',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/javascript-programming-language-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--js-development-languages-logos-pack-animations-5332666.gif',
            category: 'Frontend'
        },
        {
            name: 'Node.js',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/css-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--html-css3-framework-frontend-web-technologies-pack-logos-animations-9717102.gif',
            category: 'Backend'
        },
        {
            name: 'Java',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/react-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--application-programming-software-computer-data-web-technologies-pack-logos-animations-9717104.gif',
            category: 'Backend'
        },
        {
            name: 'Python',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/html-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--logo-programming-web-development-pack-logos-icons-9781289.gif',
            category: 'Backend'
        },
        {
            name: 'JavaScript',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/vuejs-javascript-framework-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--web-technologies-pack-logos-animations-9717097.gif',
            category: 'Frontend'
        },
        {
            name: 'React',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/java-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--html-webpage-server-web-technologies-pack-logos-animations-9717089.gif',
            category: 'Frontend'
        },
        {
            name: 'Vue.js',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/nodejs-library-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--framework-network-database-web-technologies-pack-logos-animations-9717099.gif',
            category: 'Frontend'
        },
        {
            name: 'Node.js',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/c-programming-language-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--sharp-csharp-languages-logos-pack-animations-5332665.gif',
            category: 'Backend'
        },
        {
            name: 'Java',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/c-programming-language-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--cpp-languages-logos-pack-animations-5332664.gif',
            category: 'Backend'
        },
        {
            name: 'Python',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/django-python-framework-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--html-web-technologies-pack-logos-animations-9717095.gif',
            category: 'Backend'
        },
        {
            name: 'JavaScript',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/flutter-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--logo-technology-development-codebase-pack-logos-icons-8922303.gif',
            category: 'Frontend'
        },
        {
            name: 'React',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/kotlin-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--programming-development-coding-pack-logos-animations-9812356.gif',
            category: 'Frontend'
        },
        {
            name: 'Vue.js',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/mongodb-database-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--db-network-cloud-web-technologies-pack-logos-animations-9717087.gif',
            category: 'Frontend'
        },
        {
            name: 'Node.js',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/mysql-database-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--db-network-web-technologies-pack-logos-animations-9717093.gif',
            category: 'Backend'
        },
        {
            name: 'Java',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/angular-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--application-programming-software-web-technologies-pack-logos-animations-9717083.gif',
            category: 'Backend'
        },
        {
            name: 'Python',
            image: 'https://cdnl.iconscout.com/lottie/premium/thumb/laravel-logo-animation-download-in-lottie-json-gif-static-svg-file-formats--company-application-brand-pack-logos-animations-6897428.gif',
            category: 'Backend'
        },
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
                <BackgroundLinesForService />
            </main>

            {/* Partners Section */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <p className="text-center text-sm text-blue-400 mb-8">
                    POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-8 items-center justify-items-center opacity-70">
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

            {/* Technologies Section */}
            <div className="py-16 md:py-32 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#260AFC]">
                        Technologies
                    </h2>
                    <p className="text-gray-300 text-center mb-8 md:mb-16 max-w-3xl mx-auto">
                        Using the right technology for the right problem is our mantra.
                        We are agile about learning new processes and tools to save time
                        and reduce complexity
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full text-sm ${activeCategory === category
                                    ? 'bg-yellow-400 text-black'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Technology Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {technologies
                            .filter(tech => activeCategory === 'All' || tech.category === activeCategory)
                            .map((tech, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-900 rounded-lg p-4 flex items-center justify-center aspect-square transition-all hover:bg-gray-800"
                                >
                                    <div className="w-28 h-28">
                                        <img
                                            src={tech.image}
                                            alt={tech.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* What Us Section */}
            <div className="py-1 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#260AFC]">
                        Enhanced User Experience
                    </h2>
                    <p className="text-gray-300 text-center mb-8 md:mb-16 max-w-3xl mx-auto">
                        Delivering Intuitive and Engaging Interfaces
                    </p>

                    {/* Card Container */}
                    <div className="flex flex-col lg:flex-row gap-20 items-center justify-center min-h-[300px] bg-black/50 rounded-xl p-8">
                        {/* Left Card */}
                        <div className="w-full lg:w-[500px] rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 p-8">
                            {/* Code Block */}
                            <div className="bg-gray-900 rounded-lg p-4 mb-8 font-mono text-sm">
                                <pre className="text-white overflow-x-auto">
                                    <span className="text-purple-400">import</span>{" "}
                                    <span className="text-violet-300">{"{"}</span>{" "}
                                    <span className="text-blue-300">Detail</span>{" "}
                                    <span className="text-violet-300">{"}"}</span>{" "}
                                    <span className="text-purple-400">from</span>{" "}
                                    <span className="text-green-300">"@raycast/api"</span>;
                                    {"\n\n"}
                                    <span className="text-purple-400">export default function</span>{" "}
                                    <span className="text-blue-300">Command</span>
                                    <span className="text-white">()</span>{" "}
                                    <span className="text-violet-300">{"{}"}</span>
                                    {"\n  "}
                                    <span className="text-purple-400">return</span>{" "}
                                    <span className="text-violet-300">{"<"}</span>
                                    <span className="text-blue-300">Detail</span>{" "}
                                    <span className="text-pink-400">markdown</span>
                                    <span className="text-white">=</span>
                                    <span className="text-green-300">"Hello, World!"</span>
                                    {" />"};
                                </pre>
                            </div>

                            <h2 className="text-white text-xl font-semibold mb-4">UI/UX Design</h2>
                            <p className="text-gray-100 mb-6">Crafting user-friendly and visually appealing interfaces.</p>
                            <button className="bg-black/20 text-white px-4 py-2 rounded-lg hover:bg-black/30 transition-colors">
                                View Documentation
                            </button>
                        </div>

                        {/* Right Card */}
                        <div className="w-full lg:w-[500px] rounded-2xl bg-gray-900 p-8">
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
                                </div>
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                                </div>
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <div className="w-6 h-6 bg-orange-500 rounded-md"></div>
                                </div>
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <div className="w-6 h-6 bg-white rounded-md"></div>
                                </div>
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                                    <div className="w-6 h-6 bg-blue-600 rounded-md"></div>
                                </div>
                            </div>

                            <h2 className="text-white text-xl font-semibold mb-4">TypeScript with Next.js</h2>
                            <p className="text-gray-400 mb-6">Ensuring robust and maintainable code for dynamic web applications.</p>
                            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                                View Extensions
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-black/95 flex items-center justify-center p-4">
  <div className="max-w-6xl w-full bg-purple-950/50 rounded-2xl p-8">
    {/* Header Section */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Seamless Development
        <br />
        and Deployment
      </h1>
      <p className="text-gray-300 text-lg">
        Streamlining Integration and Delivery Processes
      </p>
    </div>

    {/* Cards Container */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-purple-950/70 rounded-lg p-6 text-center">
        <h3 className="text-xl mb-4">
          <span className="text-yellow-500">Full</span>
          <span className="text-gray-300">stack</span>
          <span className="text-white"> Development</span>
        </h3>
        <p className="text-gray-300 text-sm">
          Build full-stack solutions with expertise in the MERN stack, MEAN stack, Python Django, and more.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-purple-950/70 rounded-lg p-6 text-center">
        <h3 className="text-xl mb-4">
          <span className="text-yellow-500">CI</span>
          <span className="text-gray-300">/</span>
          <span className="text-yellow-500">CD</span>
          <span className="text-white"> Pipeline</span>
        </h3>
        <p className="text-gray-300 text-sm">
          Automating integration and deployment processes for continuous delivery.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-purple-950/70 rounded-lg p-6 text-center">
        <h3 className="text-xl mb-4">
          <span className="text-yellow-500">Kubernet</span>
          <span className="text-white">s Deployment</span>
        </h3>
        <p className="text-gray-300 text-sm">
          Kubernetes deployment offers the advantage of automated scaling, self-healing, and efficient resource management, making it ideal for managing containerized applications at scale.
        </p>
      </div>
    </div>
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

const Stat = ({ number, text, color }) => (
    <div className="relative text-center">
        <span className={`text-3xl md:text-4xl font-bold text-${color}-500`}>{number}</span>
        <p className="text-sm text-gray-400 uppercase">{text}</p>
    </div>
);

export default LandingPage;