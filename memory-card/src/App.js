import React from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Score from "./Components/Score";
import characters from "./Components/characterData";

function App() {
	const [bestScore, setBestScore] = React.useState(0);

	const [score, setScore] = React.useState(0);

	const gravityFallsChars = characters.map((chars) => {
		return (
			<Card
				src={chars.charImage}
				alt={chars.name}
				key={chars.id}
				name={chars.name}
			/>
		);
	});

	const [cardGame, setCardGame] = React.useState(gravityFallsChars);

	const [clickedArray, setClickedArray] = React.useState([]);

	function handleClick(e) {
		const randomCardGame = [...cardGame];
		setCardGame(shuffle(randomCardGame));

		if (clickedArray.find((item) => item === e.target.alt)) {
			setScore(0);
			setClickedArray([]);
			if (bestScore > score) {
				setBestScore(bestScore);
			} else {
				setBestScore(score);
			}
		} else {
			clickedArray.push(e.target.alt);
			setScore(score + 1);
		}
	}

	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;
		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	}

	return (
		<div>
			<div className="header-section">
				<Header />
				<Score score={score} bestScore={bestScore} />
			</div>

			<div className="card-game" onClick={(e) => handleClick(e)}>
				{cardGame}
			</div>
		</div>
	);
}

export default App;
