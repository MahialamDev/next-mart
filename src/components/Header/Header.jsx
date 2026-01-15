import Link from 'next/link';
import React from 'react';
import Logo from '../UI/Logo/Logo';
const links =
    
    <>
        
        <li>
            <Link href={'/'}>Home</Link>
        </li>
        <li>
            <Link href={'/about'}>About</Link>
        </li>
        <li>
            <Link href={'/login'}>Login</Link>
        </li>
        <li>
            <Link href={'/items'}>Items</Link>
        </li>

</>

const Header = () => {
    return (
        <header className='h-20 flex items-center sticky top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-500/20'>
            <div className='px-4 md:px-8 max-w-7xl mx-auto flex items-center justify-between w-full'>
                <div>
                <Logo />
            </div>

            {/* desktop nav */}
            <nav className='flex items-center'>
                <ul className='flex items-center gap-8'>
                    {links}
                </ul>
            </nav>
            </div>
            
        </header>
    );
};

export default Header;