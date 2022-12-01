import { AiFillStar } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { useContext } from "react";
import GithubContext from "../context/github/GithubContext";

function GithubRepo() {
	const { repos } = useContext(GithubContext);

	return (
		<>
			{repos.map((repo) => (
				<div
					className="group border border-base-300 p-5 w-full min-w-2/6 bg-base-100 hover:bg-base-300"
					key={repo.id}
				>
					<h3 className="font-bold mb-1">{repo.name}</h3>
					<p>{repo.description}</p>
					<div className="flex flex-row items-center">
						{repo.language && (
							<div className="badge badge-outline border-base-300 badge-sm mt-2  mr-4 p-3 pb-3 ">
								{repo.language}
							</div>
						)}
						<div className="pt-2">
							<AiFillStar />
						</div>
						<div className="pt-2 ml-1">{repo.stargazers_count}</div>
						<div className="grow flex justify-end pt-2">
							<a
								href={repo.html_url}
								target="_blank"
								title="View on github"
							>
								<BiLinkExternal className="hidden group-hover:block" />
							</a>
						</div>
					</div>
				</div>
			))}
		</>
	);
}

export default GithubRepo;
