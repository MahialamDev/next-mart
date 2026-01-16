import Container from '@/components/Container/Container';
import React from 'react';

const About = () => {
    return (
        <div className="py-16 md:py-24">
            <Container>
                {/* Upper Section: Text & Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Story</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                            Bringing the Best <span className="text-blue-600">Flavors</span> to Your Table
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Started in 2020, our mission has always been to bridge the gap between local 
                            culinary experts and food lovers. We believe that good food shouldn't just 
                            be delicious; it should be an experience.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div>
                                <h3 className="text-3xl font-bold text-blue-600">50k+</h3>
                                <p className="text-gray-500 text-sm">Happy Customers</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-blue-600">120+</h3>
                                <p className="text-gray-500 text-sm">Expert Chefs</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Image/Gradient Placeholder */}
                    <div className="relative h-[400px] bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] shadow-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-white/10 opacity-20 group-hover:opacity-10 transition-opacity"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-medium">Our Kitchen Experience</span>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute top-8 left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl">🏆</div>
                            <div>
                                <p className="text-xs font-bold text-gray-800">Best Delivery 2025</p>
                                <p className="text-[10px] text-gray-400">Award Winning Service</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lower Section: Why Choose Us */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">Why People <span className="text-blue-600">Choose Us</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

const features = [
    {
        icon: "🌱",
        title: "Fresh Ingredients",
        desc: "We source our vegetables and meat daily from certified local organic farms."
    },
    {
        icon: "⚡",
        title: "Super Fast Delivery",
        desc: "Our delivery network ensures your food arrives piping hot within 30 minutes."
    },
    {
        icon: "👨‍🍳",
        title: "Master Chefs",
        desc: "Our dishes are crafted by world-class chefs with years of culinary expertise."
    }
];

export default About;