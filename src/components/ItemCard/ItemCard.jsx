import Link from 'next/link';
import React from 'react';

const ItemCard = ({ item }) => {
    const { id, foodImg, title, price, category } = item; 
    
    return (
        <Link href={`/items/details/${id}`}>
        <div className="group bg-white border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            {/* Image Section */}
            {/* Mobile par height h-32 ya h-40 rakhi hai taaki screen space manage ho */}
            <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={foodImg} 
                    alt={title} 
                />
                <span className="absolute top-2 right-2 md:top-3 md:right-3 bg-blue-600 text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full shadow-lg">
                    {category}
                </span>
            </div>

            {/* Content Section */}
            {/* Mobile ke liye padding p-3 ki hai */}
            <div className="p-3 md:p-5">
                <div className="mb-1 md:mb-2">
                    <h3 className="text-sm md:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {title}
                    </h3>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 md:mt-4 gap-2">
                    <p className="text-lg md:text-2xl font-extrabold text-blue-700">
                        ${price}
                    </p>
                    <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-2 md:p-2 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 text-[11px] md:text-sm font-medium">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default ItemCard;