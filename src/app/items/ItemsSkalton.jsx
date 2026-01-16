import React from "react";

const ItemsSkeleton = () => {
  return (
    <div className="animate-pulse bg-white border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden shadow-sm">
      
      {/* Image Skeleton */}
      <div className="relative h-32 sm:h-40 md:h-48 bg-gray-200">
        <span className="absolute top-2 right-2 md:top-3 md:right-3 bg-gray-300 h-4 w-16 md:w-20 rounded-full"></span>
      </div>

      {/* Content Skeleton */}
      <div className="p-3 md:p-5">
        
        {/* Title */}
        <div className="h-4 md:h-5 bg-gray-200 rounded w-3/4 mb-2"></div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-2">
          
          {/* Price */}
          <div className="h-6 md:h-8 bg-gray-200 rounded w-20"></div>

          {/* Button */}
          <div className="h-8 md:h-10 bg-gray-300 rounded-lg w-full sm:w-28"></div>
        </div>
      </div>
    </div>
  );
};

export default ItemsSkeleton;
