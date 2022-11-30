import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

function GithubRepo() {
	return (
		<div className="group border border-base-300 p-5 w-full min-w-2/6 hover:bg-base-200">
			<h3 className="font-bold mb-1">uiResources.io</h3>
			<p>A huge collection of UI resources</p>
			<div className="flex items-center justify-center">
				<div className="badge badge-outline border-base-300 badge-sm mt-2 p-3 pb-3 ">
					Language
				</div>
				<div className="pt-2 ml-4">
					<AiFillStar />
				</div>
				<div className="pt-2 ml-1">4</div>
				<div className="grow flex justify-end pt-2">
					<BiLinkExternal className="hidden group-hover:block" />
				</div>
			</div>
		</div>
	);
}

export default GithubRepo;
