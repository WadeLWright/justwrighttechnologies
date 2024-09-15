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
    <div className="min-h-screen bg-[#DFDFDF] text-[#000000] font-sans">
      <header className="w-full bg-[#FFFFFF] fixed top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-6 px-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-[#000000]"
          >
            Just Wright <span className="text-[#FFD700]">Technologies</span>
          </motion.h1>
          <nav>
            <ul className="flex space-x-10">
              {["Services", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href={`#${item.toLowerCase()}`} className="text-[#636363] hover:text-[#FFD700] transition-colors text-lg font-semibold">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-28">
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-[#FFFFFF] py-40"
        >
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-7xl font-bold mb-8 text-[#000000] leading-tight">
                Innovating Across <span className="text-[#FFD700]">Digital Frontiers</span>
              </h2>
              <p className="text-2xl mb-12 leading-relaxed text-[#636363] max-w-lg">
                We're a family of innovative brands, each dedicated to pushing the boundaries of what's possible in the digital realm.
              </p>
              <Button size="lg" className="bg-[#FFD700] text-[#000000] hover:bg-[#636363] hover:text-[#FFFFFF] transition-all duration-300 text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold">
                Explore Our Brands <FaArrowRight className="ml-2 inline" />
              </Button>
            </div>
            <div className="md:w-1/2">
              <img src="/hero-image.jpg" alt="Digital Innovation" className="rounded-2xl shadow-2xl" />
            </div>
          </div>
        </motion.section>

        <section id="services" className="py-40 bg-[#DFDFDF]">
          <div className="container mx-auto px-6">
            <h3 className="text-6xl font-bold mb-20 text-center text-[#000000]">Our Brands</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
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
                  className="bg-[#FFFFFF] p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <brand.icon className="text-7xl text-[#FFD700] mb-10 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-3xl font-bold mb-6 text-center text-[#000000]">{brand.title}</h4>
                  <p className="text-[#636363] text-center leading-relaxed text-lg">{brand.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-40 bg-[#FFFFFF]">
          <div className="container mx-auto px-6">
            <h3 className="text-6xl font-bold mb-20 text-center text-[#000000]">Why Choose Just Wright Technologies?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
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
                  className="bg-[#DFDFDF] p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <item.icon className="text-6xl text-[#FFD700] mb-8 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-2xl font-bold mb-6 text-[#000000] group-hover:text-[#FFD700] transition-colors">{item.title}</h4>
                  <p className="text-[#636363] leading-relaxed text-lg">{item.description}</p>
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
          className="py-40 bg-[#FFD700] text-[#000000]"
        >
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-6xl font-bold mb-10">Join Us on the Cutting Edge</h3>
            <p className="mb-14 max-w-3xl mx-auto text-2xl leading-relaxed">
              Discover how Just Wright Technologies can propel your success in tactical solutions, digital marketing, and educational technology.
            </p>
            <Button size="lg" className="bg-[#000000] text-[#FFD700] hover:bg-[#636363] transition-all duration-300 text-2xl px-14 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold">
              Contact Us Today <FaArrowRight className="ml-2 inline" />
            </Button>
          </div>
        </motion.section>
      </main>

      <footer className="bg-[#000000] py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#DFDFDF] text-xl">&copy; 2024 Just Wright Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
