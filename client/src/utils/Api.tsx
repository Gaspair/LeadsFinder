// utils/api.ts
import axios from "axios";

interface Place {
  name: string;
  formatted_address: string;
}

export const searchPlaces = async (
  location: string,
  name: string
): Promise<Place[]> => {
  const apiUrl = `http://localhost:3001/search-places?location=${encodeURIComponent(
    location
  )}&name=${encodeURIComponent(name)}`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data.results) {
      console.log(response);
      return response.data.results.map((result: any) => ({
        name: result.name,
        formatted_address: result.formatted_address,
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
