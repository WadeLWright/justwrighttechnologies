import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { FaRocket, FaChartLine, FaBrain, FaLightbulb, FaPuzzlePiece, FaUsers, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Just Wright Technologies - Innovating Across Digital Frontiers" },
    { name: "description", content: "A family of innovative brands dedicated to pushing the boundaries of what's possible in the digital realm." },
  ];
};

export default function Index() {
  const ref = useRef(null);
  const brandsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const scrollToBrands = useCallback(() => {
    brandsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans overflow-hidden">
      <header className="w-full bg-black/50 backdrop-blur-md fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img src="/Logo50px.png" alt="Just Wright Technologies Logo" className="mr-3" />
            <h1 className="text-3xl font-bold text-[#FFFFFF]">
              Just Wright <span className="text-[#FFD700]">Technologies</span>
            </h1>
          </motion.div>
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

      <main>
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/hero-background.jpg')",
              backgroundPosition: "bottom",
              backgroundSize: "cover",
              y: backgroundY,
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="text-center"
              style={{ y: textY }}
            >
              <h2 className="text-7xl font-bold mb-6 text-[#FFFFFF] leading-tight">
                Innovating Across <span className="text-[#FFD700]">Digital Frontiers</span>
              </h2>
              <p className="text-2xl mb-10 leading-relaxed text-[#DFDFDF] max-w-3xl mx-auto">
                We're a family of innovative brands, each dedicated to pushing the boundaries of what's possible in the digital realm.
              </p>
              <Button 
                size="lg" 
                className="bg-[#FFD700] text-[#000000] hover:bg-[#FFFFFF] transition-all duration-300 text-xl px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold"
                onClick={scrollToBrands}
              >
                Discover Our Brands <FaArrowRight className="ml-2 inline" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section ref={brandsRef} id="services" className="py-32 bg-gradient-to-b from-[#000000] to-[#636363]">
          <div className="container mx-auto px-6">
            <h3 className="text-6xl font-bold mb-16 text-center text-[#FFFFFF]">Our Brands</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: FaChartLine, title: "JustWrightDigital.com", description: "Data-driven digital marketing strategies for business growth." },
                { icon: FaBrain, title: "JustWrightMath.com", description: "Revolutionary interactive platform for mathematics education." },
                { icon: FaRocket, title: "JustWrightTactical.com", description: "State-of-the-art tactical solutions for modern challenges." }
              ].map((brand, index) => (
                <motion.div
                  key={brand.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-[#FFFFFF] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 overflow-hidden group"
                >
                  <div className="bg-[#000000] p-8 group-hover:bg-[#FFD700] transition-colors duration-300">
                    <brand.icon className="text-7xl text-[#FFD700] group-hover:text-[#000000] mb-6 mx-auto transition-colors duration-300" />
                    <h4 className="text-2xl font-bold mb-2 text-center text-[#FFFFFF] group-hover:text-[#000000] transition-colors duration-300">{brand.title}</h4>
                  </div>
                  <div className="p-8">
                    <p className="text-center leading-relaxed text-[#000000] text-lg">{brand.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-32 bg-gradient-to-b from-[#636363] to-[#000000]">
          <div className="container mx-auto px-6">
            <h3 className="text-6xl font-bold mb-16 text-center text-[#FFFFFF]">Why Choose Just Wright Technologies?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                { icon: FaLightbulb, title: "Innovation", description: "Pushing the envelope with forward-thinking solutions." },
                { icon: FaPuzzlePiece, title: "Expertise", description: "Diverse skills for comprehensive problem-solving." },
                { icon: FaShieldAlt, title: "Quality", description: "Maintaining the highest standards across all brands." },
                { icon: FaUsers, title: "Client-Focused", description: "Your success drives our dedication and approach." }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#FFFFFF] rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden group"
                >
                  <div className="bg-[#000000] p-6 group-hover:bg-[#FFD700] transition-colors duration-300">
                    <item.icon className="text-6xl text-[#FFD700] group-hover:text-[#000000] mb-4 mx-auto transition-colors duration-300" />
                    <h4 className="text-2xl font-bold mb-2 text-center text-[#FFFFFF] group-hover:text-[#000000] transition-colors duration-300">{item.title}</h4>
                  </div>
                  <div className="p-6">
                    <p className="text-[#000000] leading-relaxed text-center">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          id="contact" 
          className="py-32 bg-gradient-to-b from-[#000000] to-[#FFD700] text-[#000000]"
        >
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-6xl font-bold mb-8 text-[#FFFFFF]">Join Us on the Cutting Edge</h3>
            <p className="mb-12 max-w-3xl mx-auto text-2xl leading-relaxed text-[#DFDFDF]">
              Discover how Just Wright Technologies can propel your success in tactical solutions, digital marketing, and educational technology.
            </p>
            <Button size="lg" className="bg-[#000000] text-[#FFD700] hover:bg-[#636363] transition-all duration-300 text-xl px-16 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold">
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
