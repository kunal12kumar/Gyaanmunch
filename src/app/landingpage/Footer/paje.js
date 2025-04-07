"use client"
import { defaultTime } from "@tsparticles/engine"
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import React from "react"

export default function Footer() {

    return (
        <div>

            <footer className="bg-gradient-to-b from-[#1e1731] to-[#12111a] text-white py-6 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* PeerLearn Section */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">PeerLearn</h2>
                            <p className="text-gray-300">
                                Transforming education through collaborative learning and peer knowledge sharing.
                            </p>
                        </div>

                        {/* Quick Links Section */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white transition">Home</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition">Features</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition">How It Works</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition">Testimonials</a></li>
                            </ul>
                        </div>

                        {/* Support Section */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Support</h2>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-300 hover:text-white transition">Help Center</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition">FAQs</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition">Contact Us</a></li>
                                <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
                            </ul>
                        </div>


                        <div className="sm:mt-12">
                        <h2 className="sm:text-2xl font-bold mb-4">Connect With Us</h2>
                        <div className="flex sm:space-x-4 sm:flex-row flex-col">
                            <a href="#" className="p-2 sm:bg-gray-700 rounded-md hover:bg-blue-500 transition">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="p-2 sm:bg-gray-700 rounded-md hover:bg-pink-600 transition">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="p-2 sm:bg-gray-700 rounded-md hover:bg-purple-600 transition">
                                <Linkedin size={24} />
                            </a>
                           
                        </div>
                    </div>
                    </div>

                    {/* Social Media Links */}
                   

                    {/* Copyright */}
                    <div className="mt-12 pt-6 border-t border-gray-700 text-gray-400 text-sm">
                        <p>© 2025 PeerLearn. All rights reserved.</p>
                    </div>
                </div>
            </footer>



        </div>
    )
}