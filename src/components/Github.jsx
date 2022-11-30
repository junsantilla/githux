import React from "react";
import GithubRepo from "./GithubRepo";
import { AiFillGithub } from "react-icons/ai";

function Github() {
	return (
		<>
			<div className="flex justify-center">
				<div className="w-full max-w-5xl self-center px-2 py-16">
					<div className="flex justify-between items-end ">
						<div className="div">
							<h2 className="text-3xl font-bold">Github</h2>
							<p>Public repositories</p>
						</div>
						<button className="btn">
							<AiFillGithub className="mr-2" /> More on Github
						</button>
					</div>
					<div className="repos pt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
						<GithubRepo />
						<GithubRepo />
						<GithubRepo />
						<GithubRepo />
						<GithubRepo />
						<GithubRepo />
					</div>
				</div>
			</div>
		</>
	);
}

export default Github;