import React from 'react';

const Container = ({children}) => {
    return (
        <div className='px-4 md:px-8 max-w-7xl mx-auto'>
            {children}
        </div>
    );
};

export default Container;