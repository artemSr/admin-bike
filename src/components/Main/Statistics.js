import React from "react";

export default function Statistics({ bikes }) {
	let availableBikes = 0;
	let bookedBikes = 0;
	let averageCost = 0;
	if (bikes) {
		bikes.map((bike) => {
			if (bike.status === "available") {
				availableBikes++;
			}
			return availableBikes;
		});
	}
	if (bikes) {
		bikes.map((bike) => {
			if (bike.status === "busy") {
				bookedBikes++;
			}
			return bookedBikes;
		});
	}
	if (bikes.length) {
		if (bikes.length === 1) {
			bikes.map((bike) => (averageCost = bike.price));
		} else {
			averageCost = parseFloat(
				(
					bikes.reduce((sum, current) => sum + Number(current.price), 0)
          / bikes.length
				).toFixed(2),
			);
		}
	}

	return (
		<div className={"statistics-wrapper"}>
			<h1>STATISTICS</h1>
			<p>
        Total Bikes: <strong>{bikes.length}</strong>
			</p>
			<p>
        Available Bikes : <strong>{availableBikes}</strong>
			</p>
			<p>
        Booked Bikes: <strong>{bookedBikes}</strong>
			</p>
			<p>
        Average bike cost: <strong>{averageCost}</strong> UAH/hr.
			</p>
		</div>
	);
}
