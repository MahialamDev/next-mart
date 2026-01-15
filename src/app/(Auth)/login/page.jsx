'use client'
import { useRouter } from 'next/navigation';
import React from 'react';



const Login = () => {
    const router = useRouter();
    const handleMockLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
   
    if (email === 'admin@gmail.com' && password === '123456') {
        router.push('/dashboard')
    } else {
        alert("invalid")
    }
}
    return (
        <div className='flex items-center justify-center h-[90vh] border'>
            <form onSubmit={handleMockLogin} className='border p-5 max-w-xl mx-auto'>
                <label htmlFor="email">Email</label>
                <input name='email' className='border p-2 px-3 w-full' type="text" />
                <label htmlFor="password">Password</label>
                <input name='password' className='border p-2 px-3 w-full' type="password" />
                <input className='border p-2 px-3 w-full' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;