import React from "react";
import { DateCounter } from "../components/dateCounter";

export const Header = ({ date }) => {
	return (
		<div className="header">
			<p className="header__text">La proxima sesión sera en:</p>

			<div className="header__counter">
				<DateCounter eventDate={date} />
			</div>

			<p className="header__text">Sesión Totalmente Gratis</p>
		</div>
	);
};
