import Container from '@/components/Container/Container';
import React from 'react';

const ContactPage = () => {
    return (
        <div className="py-16 md:py-24 bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Side: Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                                Get in <span className="text-blue-600">Touch</span>
                            </h1>
                            <p className="text-gray-500 text-lg">
                                Have a question or feedback? We'd love to hear from you. 
                                Send us a message and our team will respond as soon as possible.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Contact Detail 1 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                                    📍
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Our Location</h4>
                                    <p className="text-gray-500 text-sm">123 Foodie Street, Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            {/* Contact Detail 2 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                                    📞
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Phone Number</h4>
                                    <p className="text-gray-500 text-sm">+880 1234 567 890</p>
                                </div>
                            </div>

                            {/* Contact Detail 3 */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl shadow-sm">
                                    ✉️
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Email Address</h4>
                                    <p className="text-gray-500 text-sm">support@foodbrand.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6 border-t border-gray-100">
                            <p className="font-semibold text-gray-900 mb-4">Follow Us</p>
                            <div className="flex gap-3">
                                {['FB', 'IG', 'TW', 'YT'].map((social) => (
                                    <div key={social} className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
                                        {social}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-blue-100 border border-gray-50">
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">First Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-3 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Last Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full p-3 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                <input 
                                    type="email" 
                                    className="w-full p-3 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                                <textarea 
                                    rows="4"
                                    className="w-full p-3 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 transition-all" 
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-95">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default ContactPage;