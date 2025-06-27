import React from "react";
import { Heart, Menu } from "lucide-react";
import Card from "./components/card";
import { dummyProperty } from "./components/data";
import FiltersSidebar from "./components/filters";
import RightSidebar from "./components/rightsidebar";

const SearchHeader = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation Bar */}
      <div className="w-full flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b text-sm font-medium bg-white shadow-sm">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <img
            src="https://img.theweek.in/content/dam/week/news/biz-tech/images/2021/11/23/nobroker-logo.jpg"
            alt="NoBroker"
            className="h-10"
          />
          <span className="font-extrabold cursor-pointer text-lg">Rent</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center flex-wrap gap-3 sm:gap-4">
          <button className="flex items-center border px-3 py-1 rounded hover:bg-gray-100 transition">
            <img
              src="https://img.icons8.com/ios-filled/20/000000/bank-cards.png"
              alt="Pay Rent"
              className="mr-2"
            />
            Pay Rent
          </button>

          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
            Post Your Property
          </button>

          <button className="hover:text-teal-600 transition">Sign up</button>
          <span className="hidden sm:inline">|</span>
          <button className="hover:text-teal-600 transition">Log in</button>

          {/* Heart Icon */}
          <div className="relative cursor-pointer">
            <Heart className="text-gray-500" size={20} />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
          </div>

          {/* Menu Icon */}
          <div className="flex items-center gap-1 cursor-pointer hover:text-teal-600 transition">
            <Menu size={20} />
            <span className="hidden sm:inline">Menu</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Sidebar (optional) */}
        <div className="hidden lg:block w-full lg:w-80 p-4 border-r overflow-y-auto bg-white sticky top-0 h-screen">
          <FiltersSidebar />
        </div>

        {/* Property Listings */}
        <div className="flex-1 p-4 space-y-6">
          {dummyProperty.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="hidden md:block p-4 w-full md:w-64 border bg-white">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
