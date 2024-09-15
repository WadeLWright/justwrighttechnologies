import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { FaRocket, FaChartLine, FaBrain } from 'react-icons/fa6';

export const meta: MetaFunction = () => {
  return [
    { title: "Just Wright Technologies - Innovating Across Digital Frontiers" },
    { name: "description", content: "A family of innovative brands dedicated to pushing the boundaries of what's possible in the digital realm." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <header className="w-full bg-black/50 backdrop-blur-md fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-gold">Just Wright Technologies</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-24">
        <section className="text-center mb-24 mt-16">
          <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-400">Innovating Across Digital Frontiers</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">We're a family of innovative brands, each dedicated to pushing the boundaries of what's possible in the digital realm.</p>
          <Button size="lg" className="bg-gold text-black hover:bg-yellow-400 transition-colors text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">Explore Our Brands</Button>
        </section>

        <section id="services" className="mb-24">
          <h3 className="text-4xl font-bold mb-12 text-center">Our Brands</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
              <FaRocket className="text-5xl text-gold mb-6 mx-auto" />
              <h4 className="text-2xl font-bold mb-4 text-center">JustWrightTactical.com</h4>
              <p className="text-gray-300">Precision meets innovation. We deliver state-of-the-art tactical solutions for modern challenges, empowering professionals with the tools they need to succeed in high-stakes environments.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
              <FaChartLine className="text-5xl text-gold mb-6 mx-auto" />
              <h4 className="text-2xl font-bold mb-4 text-center">JustWrightDigital.com</h4>
              <p className="text-gray-300">In the fast-paced world of digital marketing, we're your strategic partner. Our data-driven approaches and creative solutions help businesses thrive in the ever-evolving online landscape.</p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
              <FaBrain className="text-5xl text-gold mb-6 mx-auto" />
              <h4 className="text-2xl font-bold mb-4 text-center">JustWrightMath.com</h4>
              <p className="text-gray-300">Making mathematics accessible and engaging for learners of all ages. Our interactive platform revolutionizes how math is taught, learned, and applied in the real world.</p>
            </div>
          </div>
        </section>

        <section id="about" className="mb-24">
          <h3 className="text-4xl font-bold mb-12 text-center">Why Choose Just Wright Technologies?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-3 text-gold">Innovation at Our Core</h4>
              <p>We're constantly pushing the envelope, developing solutions that anticipate tomorrow's challenges.</p>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-3 text-gold">Diverse Expertise</h4>
              <p>Our varied portfolio allows us to approach problems from multiple angles, delivering comprehensive solutions.</p>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-3 text-gold">Quality Assurance</h4>
              <p>Across all our brands, we maintain the highest standards of quality and reliability.</p>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-3 text-gold">Customer-Centric Approach</h4>
              <p>Your success is our success. We work closely with our clients to ensure our solutions meet their unique needs.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center mb-24">
          <h3 className="text-4xl font-bold mb-8">Join Us on the Cutting Edge</h3>
          <p className="mb-10 max-w-2xl mx-auto text-xl">Whether you're looking for tactical solutions, digital marketing expertise, or innovative educational tools, Just Wright Technologies has you covered.</p>
          <Button size="lg" className="bg-gold text-black hover:bg-yellow-400 transition-colors text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1">Contact Us Today</Button>
        </section>
      </main>

      <footer className="bg-black/50 backdrop-blur-md py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Just Wright Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
