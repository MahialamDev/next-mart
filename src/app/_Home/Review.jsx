import React from 'react';

const testimonials = [
    { id: 1, name: "Ariful Islam", rating: 5, text: "The food was amazingly fresh and delivered much faster than I expected!", role: "Food Blogger" },
    { id: 2, name: "Sumaiya Akter", rating: 4, text: "Great variety of dishes. The mobile app experience is very smooth.", role: "Customer" },
    { id: 3, name: "Rashed Khan", rating: 5, text: "Best pizza in town! The blue-theme design of this site is very premium.", role: "Regular Client" },
];

const ReviewSection = () => {
    return (
        <div className="py-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">What Our <span className="text-blue-600">Customers Say</span></h2>
                <p className="text-gray-500 mt-2">Join 5,000+ happy foodies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((review) => (
                    <div key={review.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(review.rating)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>
                        <p className="text-gray-600 italic mb-6">{review.text}</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                {review.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm">{review.name}</h4>
                                <p className="text-xs text-gray-400">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;