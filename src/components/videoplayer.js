import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";

const VideoLoader = ({ videoUrl, urlRedirect, buttonText, date }) => {
	const [button, setButton] = useState(false);

	const communityButton = () => {
		setTimeout(() => {
			setButton(true);
		}, 1200000);
	};

	function timing() {
		setInterval(() => {
			let tempdate = date + 4000;
			let currentDate = Date.now();

			if (currentDate > new Date(tempdate)) {
				setButton(true);
			}
		}, 300000);
	}
	timing();

	const redirect = () => {
		window.open(urlRedirect);
	};

	return (
		<>
			<div className="player-wrapper">
				<ReactPlayer
					url={videoUrl}
					onStart={() => communityButton()}
					className="react-player "
					width="100%"
					height="100%"
				/>
			</div>

			<div className="btn-container">
				{button ? (
					<button
						className="communityButton communityButton--animated"
						onClick={() => redirect()}
					>
						{buttonText}
					</button>
				) : null}
			</div>
		</>
	);
};

export default VideoLoader;
