import React from "react";

const price = 8000;

export default function Vehicles() {
    if (price < 5000) {
        return <div>Car Price: {price + price * .05)}</div>
    } else {
        return <div>Car Price: {price + (price * .15)}</div>
    }
}