import React from 'react';

const SpecialOffer = () => {
    return (
        <div className="my-16 relative overflow-hidden bg-blue-600 rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-200">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>

            <div className="relative z-10 text-center md:text-left space-y-4">
                <span className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                    Limited Time Offer
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white">
                    Get <span className="text-yellow-400">50% Off</span> On <br /> Your First Order
                </h2>
                <p className="text-blue-100 md:text-lg max-w-md">
                    Use code <span className="font-bold text-white border-b-2 border-yellow-400">WELCOME50</span> at checkout.
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
                    Claim Discount
                </button>
            </div>

            <div className="relative z-10 mt-10 md:mt-0">
                {/* Gradient Image Placeholder */}
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-tr from-yellow-300 to-orange-400 rounded-full border-8 border-white/20 shadow-2xl flex items-center justify-center animate-bounce-slow">
                    <span className="text-5xl">🍔</span>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;