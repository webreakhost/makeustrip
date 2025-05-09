import React from "react";

const Bedtype = () => {
  return (
    <div className="space-y-6">
      {/* Bed Type Section */}
      <div className="px-4 py-4 border-b">
        <h6 className="text-lg font-medium mb-3">Bed Type</h6>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input type="checkbox" id="doublebed" className="hidden" />
            <label
              htmlFor="doublebed"
              className="block text-center px-3 py-2 border rounded-md font-medium cursor-pointer hover:bg-gray-100"
            >
              1 Double Bed
            </label>
          </div>
          <div>
            <input type="checkbox" id="2bed" className="hidden" />
            <label
              htmlFor="2bed"
              className="block text-center px-3 py-2 border rounded-md font-medium cursor-pointer hover:bg-gray-100"
            >
              2 Beds
            </label>
          </div>
          <div>
            <input type="checkbox" id="singlebed" className="hidden" />
            <label
              htmlFor="singlebed"
              className="block text-center px-3 py-2 border rounded-md font-medium cursor-pointer hover:bg-gray-100"
            >
              1 Single Bed
            </label>
          </div>
          <div>
            <input type="checkbox" id="3beds" className="hidden" />
            <label
              htmlFor="3beds"
              className="block text-center px-3 py-2 border rounded-md font-medium cursor-pointer hover:bg-gray-100"
            >
              3 Beds
            </label>
          </div>
          <div>
            <input type="checkbox" id="kingbed" className="hidden" />
            <label
              htmlFor="kingbed"
              className="block text-center px-3 py-2 border rounded-md font-medium cursor-pointer hover:bg-gray-100"
            >
              King Bed
            </label>
          </div>
        </div>
      </div>

      {/* Popular Filters Section */}
      <div className="px-4 py-4 border-b">
        <h6 className="text-lg font-medium mb-3">Popular Filters</h6>
        <ul className="space-y-3">
          <li>
            <input
              type="checkbox"
              id="fsq"
              className="mr-3 rounded border-gray-300 focus:ring-primary"
            />
            <label htmlFor="fsq">Free Cancellation Available</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="bk1"
              className="mr-3 rounded border-gray-300 focus:ring-primary"
            />
            <label htmlFor="bk1">Book @ ₹1</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="payh"
              className="mr-3 rounded border-gray-300 focus:ring-primary"
            />
            <label htmlFor="payh">Pay At Hotel Available</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="brks"
              className="mr-3 rounded border-gray-300 focus:ring-primary"
            />
            <label htmlFor="brks">Free Breakfast Included</label>
          </li>
        </ul>
      </div>

      {/* Pricing Range Section */}
      <div className="px-4 py-4 border-b">
        <h6 className="text-lg font-medium mb-3">Pricing Range in US$</h6>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          className="w-full mt-2 accent-primary"
        />
      </div>
    </div>
  );
};

export default Bedtype;
