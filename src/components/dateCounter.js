import React from "react";
import Countdown from "react-countdown";

export const DateCounter = ({ eventDate }) => {
	return (
		<>
			<Countdown date={eventDate} />
		</>
	);
};
