import React from 'react';
import { MousePointerClick, Truck, UtensilsCrossed } from 'lucide-react';

const WorkProcess = () => {
    const steps = [
        {
            id: 1,
            title: "Choose Your Food",
            desc: "Select your favorite meal from our wide range of categories and restaurants.",
            icon: <MousePointerClick className="text-blue-600" size={32} />,
            color: "bg-blue-50"
        },
        {
            id: 2,
            title: "Wait for Delivery",
            desc: "Our delivery partner will pick up your fresh food and deliver it within 30 mins.",
            icon: <Truck className="text-blue-600" size={32} />,
            color: "bg-blue-50"
        },
        {
            id: 3,
            title: "Enjoy Your Meal",
            desc: "Receive your food at your doorstep and enjoy the delicious taste of fresh meal.",
            icon: <UtensilsCrossed className="text-blue-600" size={32} />,
            color: "bg-blue-50"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Step by Step</span>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-2 ">How We <span className="text-blue-600">Work</span></h2>
                <p className="text-gray-500 mt-4 leading-relaxed">Ordering your favorite food has never been easier. Just follow these simple steps and get your food in no time.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connecting Line for Desktop */}
                <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-blue-100 -z-0"></div>

                {steps.map((step) => (
                    <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                        {/* Icon Box */}
                        <div className={`w-20 h-20 ${step.color} rounded-[2rem] flex items-center justify-center mb-6 shadow-lg shadow-blue-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border-2 border-white`}>
                            {step.icon}
                        </div>

                        {/* Step Number */}
                        <div className="absolute top-0 right-[35%] md:right-[30%] bg-blue-600 text-white w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center border-4 border-white">
                            {step.id}
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                            {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm md:px-6 leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkProcess;