const {
  calculateWeightedRating
} = require("./index");

const criteria = [
  {
    name: "Registration & Communication",
    rating: 4.6,
    weight: 30
  },
  {
    name: "Event Content & Experience",
    rating: 4.8,
    weight: 20
  },
  {
    name: "Logistics & Facilities",
    rating: 4.2,
    weight: 25
  },
  {
    name: "Event Impact",
    rating: 5.0,
    weight: 25
  }
];

const result = calculateWeightedRating(criteria);

console.log("Weighted Rating:", result);
console.log("Final Rating:", result.toFixed(1));