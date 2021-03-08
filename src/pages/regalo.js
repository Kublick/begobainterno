import React from "react";

const Regalo = () => {
	const redirect = () => {
		window.open(
			"https://drive.google.com/file/d/1g5hCQCzYFrZ0V5oZNGkMeFMUVkYCkeD-/view?usp=sharing"
		);
	};

	return (
		<div className="container-white">
			<div className="regalo">
				<h1 className="regalo__heading">
					!Felicitaciones por haber tomado acción y gracias por tu confianza!
				</h1>

				<h1 className="regalo__heading">Ya puedes abrir tu regalo</h1>
				<img
					src="https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/source.gif"
					className="regalo__img"
					alt="regalo"
				/>
				<button className="regalo__button" onClick={() => redirect()}>
					Abrir mi Regalo
				</button>
			</div>
		</div>
	);
};

export default Regalo;
