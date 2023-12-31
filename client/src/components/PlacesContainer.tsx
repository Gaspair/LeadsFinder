// components/PlacesContainer.tsx
import React from "react";
import { PlacesContainerProps } from "../utils/types";

const PlacesContainer: React.FC<PlacesContainerProps> = ({ places }) => {
  return (
    <div className="mt-6">
      {places.map((place, index) => (
        <div key={index} className="bg-gray-100 p-4 mb-2 rounded-md">
          <h2 className="text-lg text-blue-600 font-semibold">
            <span className="text-black font-semibold">Business name: </span>
            {place.name}
          </h2>
          <p className="text-blue-600">
            <span className="text-black font-semibold">Website URL: </span>
            <a rel="stylesheet" href={place.website} target="_blank">
              {place.website || "website"}
            </a>
          </p>
          <p className="text-blue-600">
            <span className="text-black font-semibold">Phone Number: </span>
            {place.formatted_phone_number || "phone number"}
          </p>
          <p className="text-blue-600">
            <span className="text-black font-semibold">Address: </span>
            {place.formatted_address || "address"}
          </p>
          <div className="text-blue-600">
            <span className="text-black font-semibold">Review Rating: </span>
            {place.rating || "rating"}
          </div>
          <div className="text-blue-600">
            <span className="text-black font-semibold">
              Number of reviews:{" "}
            </span>
            {place.user_ratings_total || "number of reviews"}
          </div>
          <label htmlFor="addButton" className="text-red-600">
            Add to database
          </label>
          <input
            type="checkbox"
            name="addButton"
            id="1"
            className="ml-4 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default PlacesContainer;
