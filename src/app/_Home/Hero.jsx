import Container from '@/components/Container/Container';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden bg-white">
           
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Text Content */}
                    <div className="flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                                Fresh & Delicious <br />
                                <span className="text-blue-600">Food at Your Door</span>
                            </h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl mx-auto lg:mx-0 leading-relaxed">
                                Explore the best dishes from top-rated local restaurants. Fast delivery, 
                                easy ordering, and the best quality guaranteed.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
                                Order Now
                            </button>
                            <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all active:scale-95">
                                View Menu
                            </button>
                        </div>

                        {/* Stats or trust badges (Optional) */}
                        <div className="pt-4 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100">
                            <div>
                                <p className="text-2xl font-bold text-gray-800">50k+</p>
                                <p className="text-sm text-gray-500">Orders Served</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-gray-800">4.9/5</p>
                                <p className="text-sm text-gray-500">User Ratings</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Section / Gradient Placeholder */}
                    <div className="relative order-1 lg:order-2 flex justify-center items-center">
                        <div className="relative w-full aspect-square max-w-[500px]">
                            {/* Decorative Background Circles */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-80"></div>
                            
                            {/* The Main Placeholder */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-400 to-indigo-600 rounded-[2rem] shadow-2xl rotate-3 flex items-center justify-center overflow-hidden group">
                                <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                
                            <Image className='w-full h-full' src="https://static.vecteezy.com/system/resources/thumbnails/000/964/198/small_2x/fast-food-meal-set.jpg" alt="d" width={400} height={400} />
                            </div>

                            {/* Floating Card (Extra Detail) */}
                            <div className="absolute -bottom-6 -right-6 md:right-0 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4 animate-bounce-slow">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <span className="text-green-600 font-bold">✓</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">Fast Delivery</p>
                                    <p className="text-xs text-gray-500">Under 30 mins</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            
        </section>
    );
};

export default Hero;