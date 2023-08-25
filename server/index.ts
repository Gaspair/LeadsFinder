import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const app = express();

app.use(cors());

interface Place {
  name: string;
  formatted_address: string;
  place_id: string;
}

app.get("/search-places", async (req: Request, res: Response) => {
  const { location, name } = req.query;

  if (!process.env.API_KEY) {
    return res.status(500).json({ error: "API key not provided." });
  }

  const placesAPIUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
    name + " in " + location
  )}&key=${encodeURIComponent(process.env.API_KEY)}`;

  const detailsAPIUrl = (place_id: string) => {
    return `https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Crating%2Cformatted_phone_number%2Cuser_ratings_total%2Cformatted_address&place_id=${place_id}&key=${encodeURIComponent(
      process.env.API_KEY as string
    )}`;
  };

  try {
    const placesAPIResponse = await axios.get(placesAPIUrl);
    const rawQuery: Place[] = placesAPIResponse.data.results;

    if (rawQuery != null) {
      const placesArray: any[] = [];
      try {
        await Promise.all(
          rawQuery.map(async (element) => {
            const detailsPlacesResponse = await axios.get(
              detailsAPIUrl(element.place_id)
            );
            placesArray.push(detailsPlacesResponse.data.result);
          })
        );
        res.json(placesArray);
      } catch (error) {
        res
          .status(500)
          .json({ error: "An error occurred while fetching data." });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
