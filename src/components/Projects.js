import React from "react";
import "../styling/Projects.css";
function Projects() {
	return (
		<div className="projects_main_container">
			<div className="projects_container">
				<div className="projects_title">
					<h1>Some of my projects</h1>
				</div>
				<div className="singleProject">
					<div className="img_container">
						<a href="https://github.com/JLeegwater/n-queens">
							<img
								alt="example of game"
								src={`${process.env.PUBLIC_URL}/images/8queens.netlify.app_.png`}
							/>
						</a>
					</div>
					<a
						className="projects_title"
						href="https://github.com/JLeegwater/n-queens"
					>
						N-Queens
					</a>
					<a className="Deployed" href="https://8queens.netlify.app/">
						Deployed
					</a>

					<p>
						A next.js web application that lets the user try to solve the
						N-Queens problem. The user can interact with the chessboard to place
						queens.
					</p>
				</div>

				<div className="singleProject">
					<div className="img_container">
						<a href="https://github.com/JLeegwater/WabbaBot">
							<img
								alt="example of bot"
								src={`${process.env.PUBLIC_URL}/images/WabbaBot.png`}
							/>
						</a>
					</div>
					<a
						className="projects_title"
						href="https://github.com/JLeegwater/WabbaBot"
					>
						WabbaBot
					</a>
					<p>
						I developed this bot for use within Discord's text channels that
						lets users play Connect 4. This bot operates smoothly within the
						platform using the Discord API, providing interactive gaming
						directly in the chat.
					</p>
				</div>

				<div className="singleProject">
					<a
						className="projects_title"
						href="https://github.com/JLeegwater/YouTube-Auto-Quality-Theater-Mode"
					>
						YouTube-Auto-Quality-Theater-Mode
					</a>
					<p>
						This JavaScript script is designed to be used in a Chrome extension
						and performs a series of clicks on specific elements within a
						YouTube video page. The script is divided into several helper
						functions that handle different aspects of the clicking process,
						such as locating and clicking elements with specific attributes or
						waiting for elements to load.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Projects;
