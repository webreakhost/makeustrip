




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BACKENDURL } from '../../Config/Config';
import RentalCard from '../rental/RentalCard';
import { FaFilter, FaTimes } from 'react-icons/fa';

const RentalResults = () => {
    const { city } = useParams();
    const [rentals, setRentals] = useState([]);
    const [filteredRentals, setFilteredRentals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    
    const [filters, setFilters] = useState({
        category: '',
        minPrice: '',
        maxPrice: '',
        beds: '',
        baths: '',
    });

    useEffect(() => {
        axios.get(`${BACKENDURL}/api/v1/rental/search?city=${city}`)
            .then(response => {
                setRentals(response.data);
                setFilteredRentals(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching rental data:', error);
                setLoading(false);
            });
    }, [city]);

    useEffect(() => {
        let filtered = rentals.filter(rental => (
            (!filters.category || rental.category === filters.category) &&
            (!filters.minPrice || rental.discountedPrice >= Number(filters.minPrice)) &&
            (!filters.maxPrice || rental.discountedPrice <= Number(filters.maxPrice)) &&
            (!filters.beds || rental.propertyDetails.beds >= Number(filters.beds)) &&
            (!filters.baths || rental.propertyDetails.baths >= Number(filters.baths))
        ));
        setFilteredRentals(filtered);
    }, [filters, rentals]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className='bg-slate-100 flex flex-col lg:flex-row relative'>
            {/* Mobile Filter Button */}
            <button 
                className='lg:hidden fixed top-18 left-3 bg-blue-500 text-white p-2 mt-4 rounded z-50 ' 
                onClick={() => setShowSidebar(true)}
            >
                <FaFilter size={20} />
            </button>
            
            {/* Sidebar */}
            <div className={`fixed lg:static top-0 lg:ml-6 mt-5 rounded-md left-0 w-3/4 sm:w-1/2 lg:w-1/5 h-full bg-white shadow-md p-4 transition-transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 z-50`}> 
                {/* Close Button */}
                <button 
                    className='lg:hidden absolute top-4 right-4 text-red-500' 
                    onClick={() => setShowSidebar(false)}
                >
                    <FaTimes size={20} />
                </button>
                <h3 className='text-xl font-semibold mb-4'>Filters</h3>
                
                <label className='block mb-2'>Category</label>
                <select name='category' onChange={handleFilterChange} className='w-full p-2 border rounded'>
                    <option value=''>All</option>
                    <option value='Apartment'>Apartment</option>
                    <option value='House'>House</option>
                </select>

                <label className='block mt-4 mb-2'>Min Price</label>
                <input type='number' name='minPrice' onChange={handleFilterChange} className='w-full p-2 border rounded' />

                <label className='block mt-4 mb-2'>Max Price</label>
                <input type='number' name='maxPrice' onChange={handleFilterChange} className='w-full p-2 border rounded' />

                <label className='block mt-4 mb-2'>Min Beds</label>
                <input type='number' name='beds' onChange={handleFilterChange} className='w-full p-2 border rounded' />

                <label className='block mt-4 mb-2'>Min Baths</label>
                <input type='number' name='baths' onChange={handleFilterChange} className='w-full p-2 border rounded' />
            </div>
            
            {/* Overlay for Sidebar */}
            {showSidebar && (
                <div 
                    className='fixed inset-0 bg-black opacity-50 z-40 lg:hidden' 
                    onClick={() => setShowSidebar(false)}
                ></div>
            )}
            
            {/* Rental Listings */}
            <div className='w-full lg:w-3/3 p-4'>
                <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>
                    Rentals in <span className='text-blue-500'>{city}</span>
                </h2>
                {loading ? <p>Loading...</p> : (
                    <div>
                        {filteredRentals.length > 0 ? (
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:px-8'>
                                {filteredRentals.map((rental, index) => (
                                    <RentalCard key={index} rental={rental} />
                                ))}
                            </div>
                        ) : (
                            <p className='text-center'>No rentals found in {city}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RentalResults;
