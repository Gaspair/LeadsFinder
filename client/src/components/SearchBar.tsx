// components/SearchBar.tsx
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (location: string, name: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");

  const handleSearch = () => {
    onSearch(location, name);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Location..."
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name..."
        className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
