
// components/Head.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Head = ({
  title = 'Make Us Trip - Your Travel Companion',
  description = 'Explore, plan, and book your dream vacation with Make Us Trip.',
  keywords = 'Travel, Tour Packages, Flights, Hotels, Holiday Planning',
  image = 'https://www.makeustrip.in/flightbanner.png',
  url = 'https://www.makeustrip.in/'
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default Head;
