// App.tsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PlacesContainer from "./components/PlacesContainer";
import { searchPlaces } from "./utils/Api";
import { Place } from "./utils/types";
import DataBaseButton from "./components/DataBaseButton";

const App: React.FC = () => {
  const [searchResults, setSearchResults] = useState<Place[]>([]);

  const handleSearch = async (location: string, name: string) => {
    const places = await searchPlaces(location, name);
    setSearchResults(places);
  };

  return (
    <div className="p-8 w-full absolute top-0">
      <SearchBar onSearch={handleSearch} />
      <DataBaseButton />
      <PlacesContainer places={searchResults} />
    </div>
  );
};

export default App;
