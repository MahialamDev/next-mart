'use client'
import Link from 'next/link';
import React from 'react';
import Logo from '../UI/Logo/Logo'; // Apnar Logo component path
import Container from '../Container/Container';
import { usePathname } from 'next/navigation';
import { Facebook, Instagram, Linkedin, X } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
const pathname = usePathname();

    if (pathname.startsWith('/dashboard')) {
        return <></>
    }
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <Container >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                
                {/* Column 1: Brand & About */}
                <div className="space-y-6">
                    <Logo />
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Savor the best flavors in town. We deliver fresh, high-quality meals 
                        straight to your doorstep with speed and care.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                        {[<Facebook />, <Instagram />, <X />, <Linkedin />].map((social, index) => (
  <div
    key={index} // ✅ unique key
    className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-blue-600 hover:text-white transition-all"
  >
    {social}
  </div>
))}

                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h4>
                    <ul className="space-y-4 text-gray-600 text-sm">
                        <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
                        <li><Link href="/about" className="hover:text-blue-600 transition">About Us</Link></li>
                        <li><Link href="/menu" className="hover:text-blue-600 transition">Our Menu</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3: Legal & Support */}
                <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-6">Support</h4>
                    <ul className="space-y-4 text-gray-600 text-sm">
                        <li><Link href="/faq" className="hover:text-blue-600 transition">FAQ</Link></li>
                        <li><Link href="/privacy" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-blue-600 transition">Terms of Service</Link></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div className="space-y-6">
                    <h4 className="text-lg font-bold text-gray-900">Join Our Newsletter</h4>
                    <p className="text-sm text-gray-500">Get the latest updates and offers.</p>
                    <div className="flex flex-col gap-2">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="bg-white border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                        <button className="bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>© {currentYear} YourBrandName. All rights reserved.</p>
                <div className="flex gap-6">
                    <span>English (US)</span>
                    <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                        <span className="font-medium text-blue-600">Secure Payment</span>
                    </div>
                </div>
            </div>
            </Container>
        </footer>
    );
};

export default Footer;