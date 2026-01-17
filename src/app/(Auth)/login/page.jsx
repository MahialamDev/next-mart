'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import useAuth from '@/Hooks/useAuth';

const Login = () => {
    const router = useRouter();
    const { setIsAuth } = useAuth();
    const handleMockLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        if (email === 'admin@gmail.com' && password === '123456') {
            document.cookie = "auth=true; path=/";
            setIsAuth(true);
            router.push('/dashboard')
        } else {
            alert("Invalid Credentials! Try: admin@gmail.com / 123456")
        }
    }

    return (
        <div className='min-h-[90vh] flex items-center justify-center bg-gray-50 px-4'>
            <div className='bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-blue-100 border border-gray-100 w-full max-w-md'>
                
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">Welcome <span className="text-blue-600">Back</span></h2>
                    <p className="text-gray-500 mt-2 text-sm">Please enter your details to login</p>
                </div>

                <form onSubmit={handleMockLogin} className='space-y-5'>
                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className='text-sm font-semibold text-gray-700 ml-1' htmlFor="email">Email Address</label>
                        <input 
                            name='email' 
                            placeholder="admin@gmail.com"
                            className='w-full p-3 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' 
                            type="email" 
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <div className="flex justify-between items-center ml-1">
                            <label className='text-sm font-semibold text-gray-700' htmlFor="password">Password</label>
                            <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
                        </div>
                        <input 
                            name='password' 
                            placeholder="••••••••"
                            className='w-full p-3 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' 
                            type="password" 
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-blue-200 active:scale-95 mt-4'
                    >
                        Login to Account
                    </button>
                </form>

                {/* Footer Link */}
                <p className="text-center text-gray-500 text-sm mt-8">
                    Don't have an account? 
                    <Link href="/register" className="text-blue-600 font-bold ml-1 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;