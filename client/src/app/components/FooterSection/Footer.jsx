import React from 'react';
import { Mail, Twitter, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 relative">
        {/* Background circles - subtle gradient effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        {/* Main heading */}
        <div className="text-center space-y-8 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
            Be part of the future
            <br />
            of Software Industry
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />

          <p className="text-xl font-medium">
            INDIA | UNITED KINGDOM | NETHERLANDS
          </p>

          <div className="text-gray-300 max-w-2xl mx-auto text-center">
            <p className="mb-2">
              Registered Address- 77 Spaces, Kumarapuram, Trivandrum, India, 695011
              Registered as Synx Automation Private Limited under the Govt. Of India
              Website maintained by Synx
            </p>
            <p className="text-lg">+44 20 4520 9365</p>
            <p className="text-blue-400">hello@synxautomate.com</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              <div className="font-bold">
                <Image
                  src="https://i.postimg.cc/TYQghNSb/synx-up-01-Yb-N9-XRn8-LOi5-J9-Qb.png"
                  alt="logo"
                  className="w-36 h-auto"
                />
              </div>
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 mb-4 md:mb-0">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              FEATURES
            </Link>
            <Link  href="/service" className="hover:text-blue-400 transition-colors">
              SERVICES
            </Link>
            <Link  href="/career" className="hover:text-blue-400 transition-colors">
              CAREERS
            </Link>
            <Link  href="/aboutUs" className="hover:text-blue-400 transition-colors">
              ABOUT US
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="text-center py-4 text-sm text-gray-500 border-t border-gray-800">
          © 2024. All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;