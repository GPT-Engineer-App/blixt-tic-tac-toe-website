import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Textarea } from "@/components/ui/textarea.jsx";
import { Label } from "@/components/ui/label.jsx";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <img src="https://via.placeholder.com/150x50" alt="Blixt Logo" className="h-10" />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="text-gray-800 hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-800 hover:text-blue-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-800 hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Blixt - Powering the Future</h1>
            <p className="text-xl">Discover the power of Blixt and revolutionize your world.</p>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">About Blixt</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel metus vel velit bibendum malesuada. Proin consequat libero vitae est volutpat, ut malesuada sapien malesuada. Sed euismod nisi vel ex pharetra, vel aliquam odio vestibulum. Duis vel ex euismod, malesuada sapien vel, malesuada velit.</p>
          </div>
        </section>

        <section id="products" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Product 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum tellus sed auctor congue.</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Product 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum tellus sed auctor congue.</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Product 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum tellus sed auctor congue.</p>
                </CardContent>
                <CardFooter>
                  <Button>Learn More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p>Have a question or want to learn more about Blixt? Fill out the form and we'll get back to you soon.</p>
              </div>
              <form>
                <div className="mb-4">
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" placeholder="Your name" className="mt-1" />
                </div>
                <div className="mb-4">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" placeholder="Your email" className="mt-1" />
                </div>
                <div className="mb-4">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" rows={4} className="mt-1" />
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p>&copy; 2023 Blixt. All rights reserved.</p>
          </div>
          <div>
            <a href="#" className="text-white hover:text-blue-300 mr-4">
              Terms of Service
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed right-4 bottom-4 bg-white p-4 shadow rounded">
        <p className="text-lg font-bold">Tic-Tac-Toe game coming soon!</p>
      </div>
    </div>
  );
}

export default App;
