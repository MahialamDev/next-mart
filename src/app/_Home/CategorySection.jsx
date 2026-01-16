import Container from '@/components/Container/Container';
import React from 'react';

// Sample data - apni eta props ba API thekeo nite paren
const categories = [
    { id: 1, name: 'All', icon: '🍽️' },
    { id: 2, name: 'Burger', icon: '🍔' },
    { id: 3, name: 'Pizza', icon: '🍕' },
    { id: 4, name: 'Pasta', icon: '🍝' },
    { id: 5, name: 'Dessert', icon: '🍰' },
    { id: 6, name: 'Drinks', icon: '🥤' },
];

const CategorySection = () => {
    return (
        <section className="py-10 bg-gray-50">
         
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Our Best <span className="text-blue-600">Categories</span>
                        </h2>
                        <p className="text-gray-500 mt-2">Choose what are craving for today</p>
                    </div>
                    
                    {/* View All Button */}
                    <button className="text-blue-600 font-semibold hover:underline">
                        View All Categories →
                    </button>
                </div>

                {/* Categories List */}
                <div className="flex items-center gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`flex flex-col items-center justify-center min-w-[100px] md:min-w-[120px] p-6 rounded-2xl transition-all duration-300 border ${
                                cat.name === 'All' 
                                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' 
                                : 'bg-white border-gray-100 text-gray-700 hover:border-blue-300 hover:shadow-md'
                            }`}
                        >
                            <span className="text-3xl mb-2">{cat.icon}</span>
                            <span className="font-medium text-sm md:text-base">{cat.name}</span>
                        </button>
                    ))}
                </div>
            
        </section>
    );
};

export default CategorySection;