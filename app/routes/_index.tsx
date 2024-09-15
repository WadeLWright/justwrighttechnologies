import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Just Wright Technologies - Innovating Across Digital Frontiers" },
    { name: "description", content: "A family of innovative brands dedicated to pushing the boundaries of what's possible in the digital realm." },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <header className="w-full bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gold">Just Wright Technologies</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Innovating Across Digital Frontiers</h2>
          <p className="text-xl mb-8">We're a family of innovative brands, each dedicated to pushing the boundaries of what's possible in the digital realm.</p>
          <Button size="lg" className="bg-gold text-black hover:bg-yellow-500 transition-colors">Explore Our Brands</Button>
        </section>

        <section id="services" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Brands</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">JustWrightTactical.com</h4>
              <p>Precision meets innovation. We deliver state-of-the-art tactical solutions for modern challenges, empowering professionals with the tools they need to succeed in high-stakes environments.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">JustWrightDigital.com</h4>
              <p>In the fast-paced world of digital marketing, we're your strategic partner. Our data-driven approaches and creative solutions help businesses thrive in the ever-evolving online landscape.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">JustWrightMath.com</h4>
              <p>Making mathematics accessible and engaging for learners of all ages. Our interactive platform revolutionizes how math is taught, learned, and applied in the real world.</p>
            </div>
          </div>
        </section>

        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Just Wright Technologies?</h3>
          <ul className="text-center max-w-2xl mx-auto list-disc list-inside">
            <li><strong>Innovation at Our Core:</strong> We're constantly pushing the envelope, developing solutions that anticipate tomorrow's challenges.</li>
            <li><strong>Diverse Expertise:</strong> Our varied portfolio allows us to approach problems from multiple angles, delivering comprehensive solutions.</li>
            <li><strong>Quality Assurance:</strong> Across all our brands, we maintain the highest standards of quality and reliability.</li>
            <li><strong>Customer-Centric Approach:</strong> Your success is our success. We work closely with our clients to ensure our solutions meet their unique needs.</li>
          </ul>
        </section>

        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold mb-8">Join Us on the Cutting Edge</h3>
          <p className="mb-8">Whether you're looking for tactical solutions, digital marketing expertise, or innovative educational tools, Just Wright Technologies has you covered.</p>
          <Button size="lg" className="bg-gold text-black hover:bg-yellow-500 transition-colors">Contact Us Today</Button>
        </section>
      </main>

      <footer className="bg-black p-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Just Wright Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
