import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from './Hero';
import { HomePageContent } from './HomePageContent';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name='description' content='A Boilerplate application homepage' />
      </Helmet>
      <Hero />
      <HomePageContent />
    </>
  );
}
