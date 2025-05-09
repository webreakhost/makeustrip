import React from 'react';
import Traveller from '../component/about/Traveller';
import AdventureSection from '../component/about/AdventureSection';
import TeamSection from '../component/about/TeamSection';
import Testimonials from '../component/about/Testimonials';

import Exprince1 from '../component/home/Exprince1';

// import Head from '../components/Head';
import Head from '../component/Head';

const About = () => {
  return (
    <>
    <Head
        title="About us - Make Us Trip"
        description="Find all information about makeustrip.in"
        keywords="flights, cheap flights, book flights"
        image="https://www.makeustrip.in/flights-page-banner.png"
        url="https://www.makeustrip.in/flights"
      />
      <div className="relative bg-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 py-12 px-4 sm:px-8 lg:px-16">
        <div className="animate-fade-in-up transform transition-all duration-700 ease-out">
          
          <Exprince1/>
          
        </div>
      </div>

      <div className="relative bg-gradient-to-r  py-12 px-4 sm:px-8 lg:px-16">
        {/* <div className="animate-fade-in-left transform transition-all duration-700 ease-out"> */}
          <AdventureSection />
        {/* </div> */}
      </div>

      
    </>
  );
};

export default About;