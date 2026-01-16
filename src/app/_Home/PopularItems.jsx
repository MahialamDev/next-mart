import ItemCard from '@/components/ItemCard/ItemCard';
import React from 'react';


const PopularItems = () => {
    // Sample Data (Ekhane apnar data array ta thakbe)
    const items = [
        { id: 1, title: 'Cheese Burger', price: 12.00, category: 'Burger', foodImg: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500' },
        { id: 2, title: 'Pepperoni Pizza', price: 18.50, category: 'Pizza', foodImg: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500' },
        { id: 3, title: 'Chicken Pasta', price: 15.00, category: 'Pasta', foodImg: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500' },
        { id: 4, title: 'Iced Coffee', price: 5.99, category: 'Drinks', foodImg: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500' },
    ];

    return (
        <div className="py-12">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Popular <span className="text-blue-600">Dishes</span>
                    </h2>
                    <div className="h-1 w-20 bg-blue-600 mt-2 rounded-full"></div>
                </div>
                
                <button className="hidden sm:block px-5 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all text-sm font-medium">
                    Explore Menu
                </button>
            </div>

            {/* Grid Layout: Mobile e 2 ta, Desktop e 3 ba 4 ta */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {items.map((item) => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>

            {/* Mobile-only View More Button */}
            <div className="mt-10 text-center sm:hidden">
                <button className="w-full py-3 bg-gray-100 text-gray-800 rounded-xl font-semibold active:bg-gray-200 transition-colors">
                    See More Items
                </button>
            </div>
        </div>
    );
};

export default PopularItems;