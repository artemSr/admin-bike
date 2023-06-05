import React from "react";
import BikeList from "./BikeList";
import FormData from "./FormData";
import Statistics from "./Statistics";
import Loader from "./Loader";

export default function MainContent({
	bikes, loading, onCreate, changeBikeStatus, deleteBike,
}) {
	return (
		<main>
			<div>
				{loading && <Loader/>}
				{bikes.length ? <BikeList
					changeBikeStatus={changeBikeStatus}
					deleteBike={deleteBike}
					bikes={bikes}
				/> : loading ? null : <div className={"empty-list"}><h1>No bikes added</h1></div>}
			</div>
			<div className={"vertical-divider"}/>
			<div>
				<FormData bikes={bikes} onCreate={onCreate}/>
				<Statistics bikes={bikes}/>
			</div>
		</main>
	);
}
