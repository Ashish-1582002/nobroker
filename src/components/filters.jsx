import React from "react";

const FiltersSidebar = () => {
  return (
    <div className="w-full p-4 space-y-6 text-sm bg-white overflow-y-auto max-h-screen">
      {/* Filters Header */}
      <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded">
        <span className="font-semibold">Filters</span>
        <button className="text-sm underline hover:text-yellow-300 transition">Premium Filters</button>
      </div>

      {/* BHK Type */}
      <div>
        <label className="font-medium">BHK Type</label>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-2">
          {["1 RK", "1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"].map((type) => (
            <button
              key={type}
              className="border rounded px-3 py-1 hover:bg-gray-100 text-xs"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Rent Range */}
      <div>
        <label className="font-medium block mb-2">Rent Range: ₹ 0 to ₹ 5 Lacs</label>
        <input type="range" min="0" max="500000" className="w-full" />
      </div>

      {/* Visit Properties */}
      <div>
        <label className="font-medium flex items-center gap-2">
          <span>Visit properties within next 2 days</span>
          <span className="bg-red-500 text-white text-xs px-2 rounded">New</span>
        </label>
        <label className="mt-2 flex items-center gap-2">
          <input type="checkbox" />
          Show properties where owner is hosting a visit
        </label>
      </div>

      {/* Availability */}
      <div>
        <label className="font-medium">Availability</label>
        <div className="flex flex-col mt-2 gap-2">
          {["Immediate", "Within 15 Days", "Within 30 Days", "After 30 Days"].map(
            (option) => (
              <label key={option} className="flex items-center gap-2">
                <input type="radio" name="availability" />
                {option}
              </label>
            )
          )}
        </div>
      </div>

      {/* Preferred Tenants */}
      <div>
        <label className="font-medium">Preferred Tenants</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {["Family", "Company", "Bachelor Male", "Bachelor Female"].map((tenant) => (
            <label key={tenant} className="flex items-center gap-2">
              <input type="checkbox" />
              {tenant}
            </label>
          ))}
        </div>
      </div>

      {/* Property Type */}
      <div>
        <label className="font-medium">Property Type</label>
        <div className="flex flex-col gap-2 mt-2">
          {["Apartment", "Independent House/Villa", "Gated Community Villa"].map(
            (type) => (
              <label key={type} className="flex items-center gap-2">
                <input type="checkbox" />
                {type}
              </label>
            )
          )}
        </div>
      </div>

      {/* Furnishing */}
      <div>
        <label className="font-medium">Furnishing</label>
        <div className="flex flex-col gap-2 mt-2">
          {["Full", "Semi", "None"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input type="checkbox" />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Parking */}
      <div>
        <label className="font-medium">Parking</label>
        <div className="flex flex-col gap-2 mt-2">
          {["2-Wheeler", "4-Wheeler"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input type="checkbox" />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/* Lease Filter */}
      <div>
        <label className="font-medium flex items-center gap-2">
          <input type="checkbox" />
          Show Only Lease Properties
        </label>
      </div>
    </div>
  );
};

export default FiltersSidebar;
