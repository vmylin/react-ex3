import React from "react";

const price = 2000;
const tax = price * .1;

export default function Vehicles() {
    return(
        <div>
            Car Price: {price + tax}
        </div>
    );
}