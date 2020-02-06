import React from "react";

const car = "MG Hector";

const specifications = {
    length: 4655,
    width: 1835,
    height: 1760
}

const getDimensions = specifications => (
    `${specifications.length}(mm) ${specifications.width}(mm) ${specifications.height}(mm)`
);

export default function Vehicles() {
    return (
        <div>
            <p>{car}</p>
            <p>{getDimensions(specifications)}</p>
        </div>
    );
}