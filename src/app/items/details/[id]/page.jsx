import Container from "@/components/Container/Container";
import React from "react";

const ItemDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch item");
    }

    const data = await res.json();
    const item = data.details;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Container>
            
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-0">
                        
                        {/* Left Side: Image Section */}
                        <div className="relative h-[400px] md:h-full group">
                            <img
                                src={item.foodImg}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-5 left-5">
                                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">
                                    {item.category}
                                </span>
                            </div>
                        </div>

                        {/* Right Side: Content Section */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                                    {item.title}
                                </h1>
                                
                                <div className="flex items-center gap-2 text-gray-500">
                                    <span className="bg-blue-50 text-blue-700 p-1.5 rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </span>
                                    <p className="text-lg font-medium">Origin: {item.area}</p>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <p className="text-sm text-gray-400 uppercase font-bold tracking-widest">Price</p>
                                    <p className="text-4xl font-black text-blue-700">
                                        ৳ {item.price}
                                    </p>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-lg italic">
                                    "Experience the authentic taste of {item.area} with our specially prepared {item.title}."
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-blue-200 active:scale-95">
                                        Add to Cart
                                    </button>
                                    
                                    <a
                                        href={item.video}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-red-500 text-red-600 hover:bg-red-50 font-bold rounded-2xl transition-all"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                        </svg>
                                        Watch Recipe
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
            </Container>
        </div>
    );
};

export default ItemDetails;