import React from "react";

const RightSidebar = () => {
  const links = [
    "Flats in Vidyanagar for rent",
    "Flats in Huskur Road for rent",
    "Flats in Hebbagodi for rent",
    "Flats in Vaddara Palya for rent",
    "Flats in Bhovi Palya for rent",
    "Flats in Chikkanagamangala for rent",
  ];

  return (
    <div className="space-y-2">
    <div className="w-64 bg-gray-50 p-4 shadow-sm space-x-2 border rounded-md">
      <h2 className="text-red-600 font-semibold text-md mb-2">Quick links</h2>
      <hr className="mb-3" />
      <p className="font-medium mb-3">People also searched for</p>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
        {links.map((link, index) => (
          <li key={index} className="hover:text-red-500 cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
    
    
<div className="py-3 self-center-safe">
    <img src="https://assets.nobroker.in/nob-common/RA_SIDE.png" alt="Poster" />
 </div>


 <div className="py-3 self-center-safe">
    <img src="https://assets.nobroker.in/nb-new/72ab4bb0b57577337af1b4499c3ff120.png" alt="Poster" />
 </div>



  <div className="w-64 bg-gray-50 p-4 shadow-sm space-x-2 border rounded-md">
      <h2 className="text-red-600 font-semibold text-md mb-2">Quick links</h2>
      <hr className="mb-3" />
      <p className="font-medium mb-3">People also searched for</p>
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
        {links.map((link, index) => (
          <li key={index} className="hover:text-red-500 cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>



<div className="py-3 self-center-safe">
    <img src="https://assets.nobroker.in/nob-common/RA_SIDE.png" alt="Poster" />
 </div>



 <div className="py-3 self-center-safe">
    <img src="https://assets.nobroker.in/nb-new/72ab4bb0b57577337af1b4499c3ff120.png" alt="Poster" />
 </div>



</div>
  );
};

export default RightSidebar;