"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from "@/utils/toast";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>
              <p className="text-xl text-gray-500 mb-12">
                Have questions about our products or need a custom solution? Fill out the form and our team will contact you within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Email Us</div>
                    <div className="text-gray-500">info@creality.kz</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Call Us</div>
                    <div className="text-gray-500">+77786016967</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-bold">Visit Us</div>
                    <div className="text-gray-500">Almaty, Kazakhstan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-[40px]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold">First Name</label>
                    <Input placeholder="Adam" className="rounded-xl h-12" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">Last Name</label>
                    <Input placeholder="Adil" className="rounded-xl h-12" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="rounded-xl h-12" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Message</label>
                  <Textarea placeholder="How can we help you?" className="rounded-xl min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-lg font-bold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
