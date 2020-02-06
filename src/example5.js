import React from "react";

const cars = ["MG Hector", "Hyundai Venue", "Toyota Fortuner", "Hyundai Creta"];

const carList = cars.map((car) => 
<li key={car.toString()}>{car}</li>
);

export default function Vehicles() {
    return <ul>{carList}</ul>
}