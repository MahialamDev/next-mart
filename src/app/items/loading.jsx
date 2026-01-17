import Container from '@/components/Container/Container';
import React from 'react';
import ItemsSkeleton from './ItemsSkalton';

const LoadingScalaton = () => {
    return (
        <Container>
            <div className="h-10 w-48 bg-gray-200 animate-pulse rounded-md my-2"></div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {[...Array(12)].map((_, i)=> <ItemsSkeleton key={i} />)}
        </div>
        </Container>
    );
};

export default LoadingScalaton;