import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={'/'} className='font-bold text-2xl'>
            Next<span className='text-primary'>Mart</span>
        </Link>
    );
};

export default Logo;