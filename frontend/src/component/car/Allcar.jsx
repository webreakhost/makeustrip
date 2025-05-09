import React from 'react';
// import CarCard from './CarCard'; // Import the CarCard component
import CarCard from './CarCard';

const Allcar = () => {
  // Example car data array
  const cars = [
    {
      name: 'Carmy Accord',
      image: '/assets/img/car.jpg',
      kmIncluded: 600,
      kmRate: 15,
      type: 'SEDAN',
      ac: 'AC',
      seats: 5,
      cancellation: 'Free Cancellation Till 10 Aug 23',
      transmission: 'Manual',
      luggage: '1 Large bag',
      fuel: 'Diesel',
      discount: '15% Off',
      price: 59,
      originalPrice: 79
    },
    {
        name: 'Carmy Accord',
        image: '/assets/img/car.jpg',
        kmIncluded: 600,
        kmRate: 15,
        type: 'SEDAN',
        ac: 'AC',
        seats: 5,
        cancellation: 'Free Cancellation Till 10 Aug 23',
        transmission: 'Manual',
        luggage: '1 Large bag',
        fuel: 'Diesel',
        discount: '15% Off',
        price: 59,
        originalPrice: 79
      },
      {
        name: 'Carmy Accord',
        image: '/assets/img/car.jpg',
        kmIncluded: 600,
        kmRate: 15,
        type: 'SEDAN',
        ac: 'AC',
        seats: 5,
        cancellation: 'Free Cancellation Till 10 Aug 23',
        transmission: 'Manual',
        luggage: '1 Large bag',
        fuel: 'Diesel',
        discount: '15% Off',
        price: 59,
        originalPrice: 79
      },
      {
        name: 'Carmy Accord',
        image: '/assets/img/car.jpg',
        kmIncluded: 600,
        kmRate: 15,
        type: 'SEDAN',
        ac: 'AC',
        seats: 5,
        cancellation: 'Free Cancellation Till 10 Aug 23',
        transmission: 'Manual',
        luggage: '1 Large bag',
        fuel: 'Diesel',
        discount: '15% Off',
        price: 59,
        originalPrice: 79
      },
      {
        name: 'Carmy Accord',
        image: '/assets/img/car.jpg',
        kmIncluded: 600,
        kmRate: 15,
        type: 'SEDAN',
        ac: 'AC',
        seats: 5,
        cancellation: 'Free Cancellation Till 10 Aug 23',
        transmission: 'Manual',
        luggage: '1 Large bag',
        fuel: 'Diesel',
        discount: '15% Off',
        price: 59,
        originalPrice: 79
      },
      {
        name: 'Carmy Accord',
        image: '/assets/img/car.jpg',
        kmIncluded: 600,
        kmRate: 15,
        type: 'SEDAN',
        ac: 'AC',
        seats: 5,
        cancellation: 'Free Cancellation Till 10 Aug 23',
        transmission: 'Manual',
        luggage: '1 Large bag',
        fuel: 'Diesel',
        discount: '15% Off',
        price: 59,
        originalPrice: 79
      },
    {
      name: 'Toyota Camry',
      image: '/assets/img/car.jpg',
      kmIncluded: 500,
      kmRate: 12,
      type: 'SUV',
      ac: 'AC',
      seats: 7,
      cancellation: 'Free Cancellation Till 15 Aug 23',
      transmission: 'Automatic',
      luggage: '2 Large bags',
      fuel: 'Petrol',
      discount: '10% Off',
      price: 89,
      originalPrice: 99
    },
    // Add more cars here
  ];

  return (
    <div>
      <section>
        <div className="container bg-gray-50">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
              <div className="secHeading-wrap text-center mb-5 mt-4">
                <h2>Our Awesome Vehicles</h2>
                <p>Choose the best car for your trip.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center gy-4 gx-xl-3 gx-lg-4 gx-4">
            {cars.map((car, index) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Allcar;
