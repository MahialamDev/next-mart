import Container from '@/components/Container/Container';
import React from 'react';
import Hero from './_Home/Hero';
import CategorySection from './_Home/CategorySection';
import PopularItems from './_Home/PopularItems';
import SpecialOffer from './_Home/SpecialOffer';
import ReviewSection from './_Home/Review';
import ContactPage from './_Home/ContactPage';
import WorkProcess from './_Home/WorkProcess';

const Home = () => {
  return (
    <Container>
      <Hero />
      <CategorySection />
      <PopularItems />
      <SpecialOffer />
      <ReviewSection />
      <WorkProcess />
      <ContactPage />
    </Container>
  );
};

export default Home;