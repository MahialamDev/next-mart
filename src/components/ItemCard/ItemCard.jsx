import React from 'react';

const ItemCard = ({ item }) => {
    const { id, foodImg, title, price, category } = item; 
    
    return (
        <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={foodImg} 
                    alt={title} 
                />
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {category}
                </span>
            </div>

            {/* Content Section */}
            <div className="p-5">
                <div className="mb-2">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <p className="text-2xl font-extrabold text-blue-700">
                        ${price}
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors shadow-md flex items-center gap-2 text-sm font-medium">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;