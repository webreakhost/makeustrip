





import React, { useEffect, useState } from "react";
import RentalCard from "./RentalCard";
import { BACKENDURL } from "../../Config/Config";

const RentalList1 = () => {
    const [rentals, setRentals] = useState(null); // Set initial state to null to indicate loading state

    useEffect(() => {
        fetch(BACKENDURL + "/api/v1/rental/getallrentals")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);  
                if (data && Array.isArray(data.data)) { 
                    setRentals(data.data);
                } else {
                    console.error("No rentals found");
                    setRentals([]);  // Set to empty array if no rentals found
                }
            })
            .catch((err) => {
                console.error("Error fetching rentals:", err);
                setRentals([]);  // Set empty array in case of error
            });
    }, []);

    
    return (
        <div className="container mx-auto p-2">
            {rentals === null ? (
                <p>Loading rentals...</p>
            ) : rentals.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
                    {rentals.map((rental, index) => (
                        <RentalCard key={index} rental={rental} />
                    ))}
                </div>
            ) : (
                <p>No rentals available.</p>
            )}
        </div>
    );
};

export default RentalList1;



