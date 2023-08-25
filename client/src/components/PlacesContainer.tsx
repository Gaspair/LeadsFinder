// components/PlacesContainer.tsx
import React from "react";

interface Place {
  name: string;
  formatted_address: string;
}

interface PlacesContainerProps {
  places: Place[];
}

const PlacesContainer: React.FC<PlacesContainerProps> = ({ places }) => {
  return (
    <div className="mt-4">
      {places.map((place, index) => (
        <div key={index} className="bg-gray-100 p-4 mb-2 rounded-md">
          <h2 className="text-lg font-semibold">{place.name}</h2>
          <p className="text-gray-600">{place.formatted_address}</p>
        </div>
      ))}
    </div>
  );
};

export default PlacesContainer;
