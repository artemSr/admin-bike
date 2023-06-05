import React from "react";

export default function Loader() {
	return (
		<div className={"loader-wrapper"}>
			<div className="lds-default">
				<div> </div>
				<div> </div>
				<div> </div>
				<div> </div>
				<div> </div>
				<div> </div>
				<div> </div>
				<div> </div>
				<div> </div>
			</div>
		</div>
	);
}
