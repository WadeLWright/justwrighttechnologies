import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Just Wright Technologies - Innovative Digital Solutions" },
    { name: "description", content: "Empowering businesses with cutting-edge web, mobile, and cloud solutions." },
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
          <h2 className="text-5xl font-bold mb-4">Innovative Digital Solutions</h2>
          <p className="text-xl mb-8">Empowering businesses with cutting-edge web, mobile, and cloud technologies</p>
          <Button size="lg" className="bg-gold text-black hover:bg-yellow-500 transition-colors">Get Started</Button>
        </section>

        <section id="services" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Web Development', 'Mobile Apps', 'Cloud Solutions'].map((service) => (
              <div key={service} className="bg-gray-800 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">{service}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra justo eu nulla efficitur.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">About Us</h3>
          <p className="text-center max-w-2xl mx-auto">
            Just Wright Technologies is a leading provider of innovative digital solutions. 
            With our expertise in web development, mobile apps, and cloud solutions, 
            we help businesses transform their digital presence and achieve their goals.
          </p>
        </section>

        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h3>
          <Button size="lg" className="bg-gold text-black hover:bg-yellow-500 transition-colors">Contact Us</Button>
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
