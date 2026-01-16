import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const MyLink = ({ children, href }) => {
    const pathname = usePathname();
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
    return (
        <Link className={`${isActive ? 'text-primary' : ''}`} href={href}>
            {children}
        </Link>
    );
};

export default MyLink;