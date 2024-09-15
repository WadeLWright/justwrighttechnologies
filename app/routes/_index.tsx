import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { FaRocket, FaChartLine, FaBrain } from 'react-icons/fa6';
import { motion } from "framer-motion";

export const meta: MetaFunction = () => {
  return [
    { title: "Just Wright Technologies - Innovating Across Digital Frontiers" },
    { name: "description", content: "A family of innovative brands dedicated to pushing the boundaries of what's possible in the digital realm." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="w-full bg-black fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-6 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gold"
          >
            Just Wright Technologies
          </motion.h1>
          <nav>
            <ul className="flex space-x-8">
              {["Services", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a href={`#${item.toLowerCase()}`} className="hover:text-gold transition-colors text-lg">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-32">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32 mt-16 bg-gray"
        >
          <h2 className="text-6xl font-extrabold mb-8 text-gold">
            Innovating Across Digital Frontiers
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            We're a family of innovative brands, each dedicated to pushing the boundaries of what's possible in the digital realm.
          </p>
          <Button size="lg" className="bg-gold text-black hover:bg-yellow-500 transition-all duration-300 text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            Explore Our Brands
          </Button>
        </motion.section>

        <section id="services" className="mb-32">
          <h3 className="text-5xl font-bold mb-16 text-center">Our Brands</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: FaRocket, title: "JustWrightTactical.com", description: "Precision meets innovation. We deliver state-of-the-art tactical solutions for modern challenges, empowering professionals with the tools they need to succeed in high-stakes environments." },
              { icon: FaChartLine, title: "JustWrightDigital.com", description: "In the fast-paced world of digital marketing, we're your strategic partner. Our data-driven approaches and creative solutions help businesses thrive in the ever-evolving online landscape." },
              { icon: FaBrain, title: "JustWrightMath.com", description: "Making mathematics accessible and engaging for learners of all ages. Our interactive platform revolutionizes how math is taught, learned, and applied in the real world." }
            ].map((brand, index) => (
              <motion.div
                key={brand.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700/50 group hover:-translate-y-2"
              >
                <brand.icon className="text-6xl text-gold mb-8 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-2xl font-bold mb-6 text-center">{brand.title}</h4>
                <p className="text-gray-300 leading-relaxed">{brand.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="about" className="mb-32">
          <h3 className="text-5xl font-bold mb-16 text-center">Why Choose Just Wright Technologies?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              { title: "Innovation at Our Core", description: "We're constantly pushing the envelope, developing solutions that anticipate tomorrow's challenges." },
              { title: "Diverse Expertise", description: "Our varied portfolio allows us to approach problems from multiple angles, delivering comprehensive solutions." },
              { title: "Quality Assurance", description: "Across all our brands, we maintain the highest standards of quality and reliability." },
              { title: "Customer-Centric Approach", description: "Your success is our success. We work closely with our clients to ensure our solutions meet their unique needs." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700/30 hover:border-gold/30 transition-all duration-300 group"
              >
                <h4 className="text-2xl font-bold mb-4 text-gold group-hover:text-yellow-500 transition-colors">{item.title}</h4>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          id="contact" 
          className="text-center mb-32"
        >
          <h3 className="text-5xl font-bold mb-10">Join Us on the Cutting Edge</h3>
          <p className="mb-12 max-w-3xl mx-auto text-2xl leading-relaxed">
            Whether you're looking for tactical solutions, digital marketing expertise, or innovative educational tools, Just Wright Technologies has you covered.
          </p>
          <Button size="lg" className="bg-gold text-black hover:bg-yellow-500 transition-all duration-300 text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
            Contact Us Today
          </Button>
        </motion.section>
      </main>

      <footer className="bg-black/70 backdrop-blur-md py-10">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 Just Wright Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
