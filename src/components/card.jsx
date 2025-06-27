import React from "react";

const Card = ({ property }) => {
  return (
    <div className="max-w-5xl mx-auto border rounded-lg shadow-sm p-4 bg-white">
      {/* Title & Location */}
      <h2 className="text-lg sm:text-xl font-semibold">
        {property.title}{" "}
        <span className="inline-block align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-4 h-4 ml-1 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </h2>
      <p className="text-gray-500 text-sm mt-1">
        {property.location}{" "}
        <a href="#" className="text-blue-500 underline">
          Explore Nearby
        </a>
      </p>

      {/* Price/Deposit/Area */}
      <div className="grid grid-cols-3 gap-2 text-center border-y mt-4 py-3 text-sm sm:text-base">
        <div>
          <p className="font-bold">{property.rent}</p>
          <p className="text-gray-500">Rent</p>
        </div>
        <div>
          <p className="font-bold">{property.deposit}</p>
          <p className="text-gray-500">Deposit</p>
        </div>
        <div>
          <p className="font-bold">{property.area}</p>
          <p className="text-gray-500">Builtup</p>
        </div>
      </div>

      {/* Image + Features */}
      <div className="flex flex-col md:flex-row mt-4 gap-4">
        {/* Image */}
        <div className="w-full md:w-1/3">
          <img
            src={property.image}
            alt="House"
            className="w-full h-48 md:h-full object-cover rounded"
          />
          <p className="text-xs text-right pr-1 mt-1">1</p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 text-sm w-full md:w-2/3">
          <div className="flex flex-col">
            <span className="font-medium text-black">{property.furnishing}</span>
            <div className="flex justify-between mt-1">
              <span className="text-gray-500">Furnishing</span>
              <button className="text-teal-600 border border-teal-600 rounded px-2 py-0.5 text-xs hover:bg-teal-50">
                Furnish
              </button>
            </div>
          </div>
          <div>
            <span className="font-medium text-black">{property.apartmentType}</span>
            <p className="text-gray-500 mt-1">Apartment Type</p>
          </div>
          <div>
            <span className="font-medium text-black">{property.tenants}</span>
            <p className="text-gray-500 mt-1">Preferred Tenants</p>
          </div>
          <div>
            <span className="font-medium text-black">{property.availability}</span>
            <p className="text-gray-500 mt-1">Available From</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-4 gap-2">
        <button className="bg-pink-600 text-white px-6 py-2 text-xs rounded hover:bg-pink-700 w-full sm:w-auto">
          Get Owner Details
        </button>
        <div className="flex gap-2 justify-center sm:justify-start">
          <button className="border rounded p-2">❤️</button>
          <button className="border rounded p-2">🚩</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
