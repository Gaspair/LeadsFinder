import axios from "axios";
import { Place } from "./types";

export const searchPlaces = async (
  location: string,
  name: string
): Promise<Place[]> => {
  const apiUrl = `https://leads-finder.onrender.com/search-places?location=${encodeURIComponent(
    location
  )}&name=${encodeURIComponent(name)}`;

  try {
    const response = await axios.get(apiUrl);
    if (response.data != null) {
      return response.data.map((object: Place) => ({
        name: object.name,
        website: object.website,
        formatted_phone_number: object.formatted_phone_number,
        rating: object.rating,
        user_ratings_total: object.user_ratings_total,
        formatted_address: object.formatted_address,
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
