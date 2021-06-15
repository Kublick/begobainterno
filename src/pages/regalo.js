import React, { useEffect, useState } from "react";

const Regalo = () => {
	const [regalo2, setRegalo2] = useState(false);
	const [regalo3, setRegalo3] = useState(false);

	const redirect = () => {
		window.open(
			"https://drive.google.com/file/d/15OBO6X0ejHixt-Iww6pqbbAza-RawKJT/view?usp=sharing"
		);
	};

	let eventRegalo2 = "June 29, 2021 18:15";
	let eventRegalo3 = "June 30, 2021 18:15";

	useEffect(() => {
		if (new Date(eventRegalo2) < Date.now()) {
			setRegalo2(true);
		}

		if (new Date(eventRegalo3) < Date.now()) {
			setRegalo3(true);
		}
	}, [eventRegalo2, eventRegalo3]);

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
					Regalo 1
				</button>

				{regalo2 ? (
					<button
						className="regalo__button"
						onClick={() =>
							window.open(
								"https://drive.google.com/file/d/1j8HeH7lr51HcISIH_fVIlD0rdyI60SnX/view?usp=sharing"
							)
						}
					>
						Regalo 2
					</button>
				) : null}

				{regalo3 ? (
					<button
						className="regalo__button"
						onClick={() =>
							window.open(
								"https://drive.google.com/file/d/1g5hCQCzYFrZ0V5oZNGkMeFMUVkYCkeD-/view?usp=sharing"
							)
						}
					>
						Regalo 3
					</button>
				) : null}
			</div>
		</div>
	);
};

export default Regalo;
