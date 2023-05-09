import React from "react";

export default function Card(props) {
	return (
		<div className="card-container">
			<img src={props.src} alt={props.alt} />
			<h3>{props.name}</h3>
		</div>
	);
}
