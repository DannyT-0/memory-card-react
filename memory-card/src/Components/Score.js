import React from "react";

export default function Score(props) {
	return (
		<div>
			<h4>Score:{props.score} </h4>
			<h4>Best score:{props.bestScore} </h4>
		</div>
	);
}
