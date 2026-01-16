"use client"; // State use karne ke liye zaruri hai
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../UI/Logo/Logo';
import { Menu, X } from 'lucide-react'; // Lucide-react icons use kar rahe hain
import MyLink from '../UI/MyLink/MyLink';
import { usePathname } from 'next/navigation';

const links = (
    <>
        <li><MyLink href={'/'} className="hover:text-blue-600 transition">Home</MyLink></li>
        <li><MyLink href={'/about'} className="hover:text-blue-600 transition">About</MyLink></li>
        <li><MyLink href={'/login'} className="hover:text-blue-600 transition">Login</MyLink></li>
        <li><MyLink href={'/items'} className="hover:text-blue-600 transition">Items</MyLink></li>
    </>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    if (pathname.startsWith('/dashboard')) {
        return <></>
    }

    return (
        <header className='h-20 flex items-center sticky top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-500/20'>
            <div className='px-4 md:px-8 max-w-7xl mx-auto flex items-center justify-between w-full'>
                <div>
                    <Logo />
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden md:flex items-center'>
                    <ul className='flex items-center gap-8 font-medium'>
                        {links}
                    </ul>
                </nav>

                {/* Mobile Hamburger Button */}
                <div className='md:hidden flex items-center'>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 focus:outline-none"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar/Dropdown */}
            <div className={`absolute top-20 left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className='flex flex-col items-center gap-6 py-8 font-medium shadow-xl' onClick={() => setIsOpen(false)}>
                    {links}
                </ul>
            </div>
        </header>
    );
};

export default Header;