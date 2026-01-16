import Container from '@/components/Container/Container';
import ItemCard from '@/components/ItemCard/ItemCard';
import React from 'react';

const getItems = async() => {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random`);
    const data = await res.json();
    return data.foods || [];
}

const items = async() => {
    const items = await getItems();
    console.log(items)
    return (
        <Container>
          
            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold my-2 py-2'>All Items <span className='text-primary'>{items.length}</span></h1>
           
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {items.map(item => <ItemCard key={item.id} item={item} />)}
        </div>
        </Container>
    );
};

export default items;