import React from "react";
import GithubRepo from "./GithubRepo";
import { AiFillGithub } from "react-icons/ai";

function Github() {
	return (
		<>
			<div className="flex justify-center  px-5">
				<div className="w-full max-w-5xl self-center px-2 py-16">
					<div className="flex justify-between items-end ">
						<div className="div text-base-100">
							<h2 className="text-3xl font-bold">Github</h2>
							<p>Public repositories</p>
						</div>
						<div className="hidden md:block">
							<button className="btn bg-base-100 hover:bg-base-300 border-0 text-black ">
								<AiFillGithub className="mr-2 " /> More on
								github
							</button>
						</div>
					</div>
					<div className="repos pt-5 columns-1 md:columns-3">
						<GithubRepo />
					</div>
					<div className="md:hidden ">
						<button className="btn bg-base-100 hover:bg-base-300 border-0 text-black w-full">
							<AiFillGithub className="mr-2 " /> More on github
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Github;
