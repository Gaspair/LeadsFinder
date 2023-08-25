// components/PlacesContainer.tsx
import React from "react";
import { PlacesContainerProps } from "../utils/types";

const PlacesContainer: React.FC<PlacesContainerProps> = ({ places }) => {
  return (
    <div className="mt-4">
      {places.map((place, index) => (
        <div key={index} className="bg-gray-100 p-4 mb-2 rounded-md">
          <h2 className="text-lg text-black font-semibold">{place.name}</h2>
          <p className="text-blue-600">{place.website}</p>
          <p className="text-blue-600">{place.formatted_phone_number}</p>
          <p className="text-blue-600">{place.type}</p>
          <p className="text-blue-600">{place.reviews}</p>
        </div>
      ))}
    </div>
  );
};

export default PlacesContainer;
