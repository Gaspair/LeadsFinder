// App.tsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PlacesContainer from "./components/PlacesContainer";
import { searchPlaces } from "./utils/Api";
import { Place } from "./utils/types";

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Place[]>([]);

  const handleSearch = async (location: string, name: string) => {
    const places = await searchPlaces(location, name);
    console.log(places);
    setSearchResults(places);
  };

  return (
    <div className="p-8">
      <SearchBar onSearch={handleSearch} />
      <PlacesContainer places={searchResults} />
    </div>
  );
};

export default App;
