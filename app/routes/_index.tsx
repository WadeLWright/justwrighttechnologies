import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { FaRocket, FaChartLine, FaBrain, FaLightbulb, FaPuzzlePiece, FaUsers, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Just Wright Technologies - Innovating Across Digital Frontiers" },
    { name: "description", content: "A family of innovative brands dedicated to pushing the boundaries of what's possible in the digital realm." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#636363] text-[#FFFFFF] font-sans">
      <header className="w-full bg-black/50 backdrop-blur-md fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#FFFFFF]"
          >
            Just Wright <span className="text-[#FFD700]">Technologies</span>
          </motion.h1>
          <nav>
            <ul className="flex space-x-8">
              {["Services", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href={`#${item.toLowerCase()}`} className="text-[#DFDFDF] hover:text-[#FFD700] transition-colors text-lg font-medium">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-32"
        >
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-6xl font-bold mb-6 text-[#FFFFFF] leading-tight">
                Innovating Across <span className="text-[#FFD700]">Digital Frontiers</span>
              </h2>
              <p className="text-xl mb-10 leading-relaxed text-[#DFDFDF] max-w-lg">
                We're a family of innovative brands, each dedicated to pushing the boundaries of what's possible in the digital realm.
              </p>
              <Button size="lg" className="bg-[#FFD700] text-[#000000] hover:bg-[#FFFFFF] transition-all duration-300 text-lg px-10 py-3 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold">
                Discover Our Brands <FaArrowRight className="ml-2 inline" />
              </Button>
            </div>
            <div className="md:w-1/2">
              <img src="/hero-image.jpg" alt="Digital Innovation" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </motion.section>

        <section id="services" className="py-32 bg-[#636363]/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <h3 className="text-5xl font-bold mb-16 text-center text-[#FFFFFF]">Our Brands</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                  className="bg-[#FFFFFF] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 hover:scale-105 overflow-hidden"
                >
                  <div className="bg-[#000000] p-4">
                    <brand.icon className="text-6xl text-[#FFD700] mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-2xl font-bold mb-2 text-center text-[#FFFFFF]">{brand.title}</h4>
                  </div>
                  <div className="p-6">
                    <p className="text-center leading-relaxed text-[#000000]">{brand.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-32 bg-gradient-to-b from-[#636363]/20 to-[#000000]/70 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <h3 className="text-5xl font-bold mb-16 text-center text-[#FFFFFF]">Why Choose Just Wright Technologies?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
                  className="bg-[#FFFFFF] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 overflow-hidden"
                >
                  <div className="bg-[#000000] p-4">
                    <item.icon className="text-5xl text-[#FFD700] mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-xl font-bold mb-2 text-center text-[#FFFFFF]">{item.title}</h4>
                  </div>
                  <div className="p-6">
                    <p className="text-[#000000] leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          id="contact" 
          className="py-32 bg-gradient-to-b from-[#000000]/70 to-[#FFD700] text-[#000000]"
        >
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-5xl font-bold mb-8 text-[#FFFFFF]">Join Us on the Cutting Edge</h3>
            <p className="mb-12 max-w-3xl mx-auto text-xl leading-relaxed text-[#DFDFDF]">
              Discover how Just Wright Technologies can propel your success in tactical solutions, digital marketing, and educational technology.
            </p>
            <Button size="lg" className="bg-[#000000] text-[#FFD700] hover:bg-[#636363] transition-all duration-300 text-xl px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold">
              Contact Us Today <FaArrowRight className="ml-2 inline" />
            </Button>
          </div>
        </motion.section>
      </main>

      <footer className="bg-[#000000] py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#DFDFDF] text-lg">&copy; 2024 Just Wright Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
