const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/search-places", async (req, res) => {
  const { location, name } = req.query;

  const placesAPIUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(
    name + " in " + location
  )}&key=${encodeURIComponent(process.env.API_KEY)}`;

  const detailsAPIUrl = (place_id) => {
    return `https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cwebsite%2Crating%2Cformatted_phone_number&place_id=${place_id}&key=${encodeURIComponent(
      process.env.API_KEY
    )}`;
  };

  try {
    const placesAPIResponse = await axios.get(placesAPIUrl);
    const rawQuery = placesAPIResponse.data.results;

    if (rawQuery != null) {
      const placesArray = [];
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
