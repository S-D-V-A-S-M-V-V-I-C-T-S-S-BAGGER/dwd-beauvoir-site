import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from './hero';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Hero />
      <img src="images/logo_with_bg.png"/>
    </>
  );
}
