import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";

const VideoLoader = ({ videoUrl, urlRedirect, buttonText }) => {
	const [button, setButton] = useState(false);

	const communityButton = () => {
		setTimeout(() => {
			setButton(true);
		}, 5000);
	};

	communityButton();
	//1200000

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
