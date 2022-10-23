const { response } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const hotels = require("./data/hotels.json");
const places = require("./data/places.json");

app.get("/", (req, res) => {
  res.send("Travel server is running");
});

app.get("/places", (req, res) => {
  res.send(places);
});

app.get("/places/:id", (req, res) => {
  const id = req.params.id;
  const findPlace = places.find((place) => place.id === id);
  res.send(findPlace);
});

app.get("/hotels", (req, res) => {
  res.send(hotels);
});

app.get("/hotels/:place", (req, res) => {
  const place = req.params.place;
  const filterHotels = hotels.filter((hotel) => hotel.place_slug === place);
  res.send(filterHotels);
});

app.get("/hotel/:id", (req, res) => {
  const id = req.params.id;
  const findHotel = hotels.find((hotel) => hotel.id === id);
  res.send(findHotel);
});

app.listen(port, () => {
  console.log(`Travel app listening on port ${port}`);
});
