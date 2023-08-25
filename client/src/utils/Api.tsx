import axios from "axios";
import { Place } from "./types";

export const searchPlaces = async (
  location: string,
  name: string
): Promise<Place[]> => {
  const apiUrl = `http://localhost:3001/search-places?location=${encodeURIComponent(
    location
  )}&name=${encodeURIComponent(name)}`;

  try {
    const response = await axios.get(apiUrl);
    if (response != null) {
      console.log(response);

      return response.data.map((object: Place) => ({
        name: object.name,
        website: object.website,
        phone: object.formatted_phone_number,
        type: object.type,
        reviews: object.reviews,
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
