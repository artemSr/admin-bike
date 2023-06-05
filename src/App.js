import React, { useState, useEffect } from "react";
import localforage from "localforage";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import MainContent from "./components/Main/MainContent";

function App() {
	const [bikes, setBikes] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		localforage.setItem("bikes", bikes).then(() => {});
	}, [bikes]);
	useEffect(() => {
		localforage.getItem("bikes").then((data) => {
			setBikes(data || []);
			setLoading(false);
		}).catch((e) => {
			console.log(e);
		});
	}, []);
	function addBike(name, type, color, wheelSize, price, id, description) {
		const data = {
			name, type, color, wheelSize, price, id, description, status: "available",
		};
		setBikes(bikes.concat(data));
		localforage.setItem("bikes", data).then(() => {})
			.catch((e) => {
				console.log(e);
			});
	}
	function changeBikeStatus(id, status) {
		localforage.getItem("bikes").then((bikes) => {
			const changedBikes = bikes.map((bike) => {
				if (bike.id === id) {
					bike.status = status;
					console.log(bike.id);
					console.log(bike.status);
				}
				return bike;
			});
			setBikes(changedBikes);
		});
	}
	function deleteBike(id) {
		localforage.getItem("bikes").then((bikes) => {
			setBikes(bikes.filter((bike) => bike.id !== id));
			localforage.removeItem("bikes");
			localforage.setItem("bikes", bikes);
		});
	}

	return (
		<div className={"wrapper"}>
			<PageHeader />
			<MainContent
				bikes={bikes}
				loading={loading}
				deleteBike={deleteBike}
				changeBikeStatus={changeBikeStatus}
				onCreate={addBike}/>
			<PageFooter />
		</div>
	);
}

export default App;
