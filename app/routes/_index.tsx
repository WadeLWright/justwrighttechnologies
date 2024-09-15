import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "JustWright Technologies" },
    { name: "description", content: "Innovative Solutions for Your Digital Needs" },
  ];
};
export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Just Wright Technologies</h1>
        <p className="text-xl">Innovative Solutions for Your Digital Needs</p>
      </header>

      <main>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Web Development</CardTitle>
              <CardDescription>Custom websites and web applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p>We create responsive and user-friendly web solutions tailored to your business needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mobile Apps</CardTitle>
              <CardDescription>iOS and Android app development</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Bring your ideas to life with our expert mobile app development services.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cloud Solutions</CardTitle>
              <CardDescription>Scalable and secure cloud infrastructure</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Leverage the power of cloud computing with our tailored solutions.</p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <Button size="lg">Contact Us</Button>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2024 JustWright Technologies. All rights reserved.
      </footer>
    </div>
  );
}
