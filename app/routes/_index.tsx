import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { FaRocket, FaChartLine, FaBrain, FaLightbulb, FaPuzzlePiece, FaUsers, FaShieldAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Just Wright Technologies - Innovating Across Digital Frontiers" },
    { name: "description", content: "A family of innovative brands dedicated to pushing the boundaries of what's possible in the digital realm." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-300 text-black">
      <header className="w-full bg-black fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gold"
          >
            Just Wright Technologies
          </motion.h1>
          <nav>
            <ul className="flex space-x-6">
              {["Services", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href={`#${item.toLowerCase()}`} className="text-white hover:text-gold transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-24">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 mt-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-black">
            Innovating Across Digital Frontiers
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-darkGray">
            We're a family of innovative brands, each dedicated to pushing the boundaries of what's possible in the digital realm.
          </p>
          <Button size="lg" className="bg-gold text-black hover:bg-yellow-500 transition-all duration-300 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-bold">
            Explore Our Brands
          </Button>
        </motion.section>

        <section id="services" className="mb-24">
          <h3 className="text-4xl font-bold mb-12 text-center text-black">Our Brands</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaRocket, title: "JustWrightTactical.com", description: "State-of-the-art tactical solutions for modern challenges." },
              { icon: FaChartLine, title: "JustWrightDigital.com", description: "Data-driven digital marketing strategies for business growth." },
              { icon: FaBrain, title: "JustWrightMath.com", description: "Revolutionary interactive platform for mathematics education." }
            ].map((brand, index) => (
              <motion.div
                key={brand.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group hover:-translate-y-1"
              >
                <brand.icon className="text-4xl text-gold mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-bold mb-3 text-center text-black">{brand.title}</h4>
                <p className="text-darkGray text-sm leading-relaxed">{brand.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="mb-24">
          <h3 className="text-4xl font-bold mb-12 text-center text-black">Why Choose Just Wright Technologies?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: FaLightbulb, title: "Innovation", description: "Pushing the envelope with forward-thinking solutions." },
              { icon: FaPuzzlePiece, title: "Expertise", description: "Diverse skills for comprehensive problem-solving." },
              { icon: FaShieldAlt, title: "Quality", description: "Maintaining the highest standards across all brands." },
              { icon: FaUsers, title: "Client-Focused", description: "Your success drives our dedication and approach." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gold transition-all duration-300 group"
              >
                <item.icon className="text-3xl text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-lg font-bold mb-2 text-black group-hover:text-gold transition-colors">{item.title}</h4>
                <p className="text-darkGray text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          id="contact" 
          className="text-center mb-24"
        >
          <h3 className="text-4xl font-bold mb-6 text-black">Join Us on the Cutting Edge</h3>
          <p className="mb-10 max-w-2xl mx-auto text-lg leading-relaxed text-darkGray">
            Discover how Just Wright Technologies can propel your success in tactical solutions, digital marketing, and educational technology.
          </p>
          <Button size="lg" className="bg-gold text-black hover:bg-yellow-500 transition-all duration-300 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-bold">
            Contact Us Today
          </Button>
        </motion.section>
      </main>

      <footer className="bg-black py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 Just Wright Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
