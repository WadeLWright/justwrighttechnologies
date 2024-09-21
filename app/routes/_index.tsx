import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { FaFileImage, FaLightbulb, FaPuzzlePiece, FaUsers, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { TbMathSymbols } from "react-icons/tb";
import { ImTarget } from "react-icons/im";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useCallback } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Just Wright Technologies - Innovating Across Digital Frontiers" },
    { name: "description", content: "A family of innovative brands dedicated to pushing the boundaries of what's possible in the digital realm." },
  ];
};

export default function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
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
      <header className="w-full bg-black fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a href="/" className="flex items-center">
              <img src="/Logo50px.png" alt="Just Wright Technologies Logo" className="mr-3" />
              <h1 className="text-3xl font-bold text-[#FFFFFF]">
                Just Wright <span className="text-[#FFD700]">Technologies</span>
              </h1>
            </a>
          </motion.div>
          <nav>
            <ul className="flex space-x-8">
              {["Services", "Contact"].map((item, index) => (
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
        <section ref={ref as React.RefObject<HTMLDivElement>} className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0 hero-background"
            style={{
              backgroundImage: "url('/hero-background.png')",
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
                We're a family of innovative services, each dedicated to pushing the boundaries of what's possible in the digital realm.
              </p>
              <Button 
                className="bg-[#FFD700] text-[#000000] hover:bg-[#FFFFFF] transition-all duration-300 text-xl px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold"
                onClick={scrollToBrands}
              >
                Discover <FaArrowRight className="ml-2 inline" />
              </Button>
            </motion.div>
          </div>
        </section>

        <section ref={brandsRef as React.RefObject<HTMLDivElement>} id="services" className="py-32 bg-gradient-to-b from-[#000000] to-[#636363]">
          <div className="container mx-auto px-6">
            <h3 className="text-6xl font-bold mb-16 text-center text-[#FFFFFF]">Our Services</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12">
              {[
                { icon: FaFileImage, title: "JustWrightDigital.com", description: "At Just Wright Digital, we believe that creativity knows no bounds. Our Etsy shop is dedicated to providing high-quality digital art resources that spark imagination and empower creative individuals like you to bring your visions to life.", url: "https://justwrightdigital.etsy.com" },
                { icon: TbMathSymbols , title: "MyMathTutor.ai", description: "Struggling to help your child with their math homework? No more saying 'that's not how we did it when I was in school.' Meet your new best friend in learning: mymathtutor.ai", url: "https://justwrightmath.com" }, 
                { icon: ImTarget, title: "JustWrightTactical.com", description: "Equip yourself with the best at Just Wright Tactical. We offer premium tactical gear for professionals and enthusiasts who demand quality and performance. Our curated selection meets the highest standards. Don't just survive - thrive with Just Wright Tactical.", url: "https://justwrighttactical.com" } 
              ].map((brand, index) => (
                <motion.div
                  key={brand.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -16, scale: 1.05 }}
                  className="bg-[#FFFFFF] rounded-3xl shadow-xl overflow-hidden group cursor-pointer"
                  onClick={() => brand.url && window.open(brand.url, '_blank')}
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
            <Button className="bg-[#000000] text-[#FFD700] hover:bg-[#636363] transition-all duration-300 text-xl px-16 py-5 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-bold">
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
