import { useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import {
	BiUserPlus,
	BiUserCheck,
	BiBookBookmark,
	BiBookmarkAlt,
} from "react-icons/bi";

function Stats() {
	const { user } = useContext(GithubContext);

	const { followers, following, public_repos, public_gists } = user;

	return (
		<>
			<div className="flex justify-center px-5 mt-2">
				<div className="w-full max-w-5xl self-center px-2">
					<div className="stats grid grid-cols-2 md:grid-cols-4 grid-flow-row rounded-none">
						<div className="stat ">
							<div className="font-bold">
								<BiUserPlus className="inline mb-1 " />{" "}
								Followers
							</div>
							<div className="stat-value text-primary text-3xl">
								{followers}
							</div>
						</div>

						<div className="stat ">
							<div className="font-bold">
								<BiUserCheck className="inline mb-1" />{" "}
								Following
							</div>
							<div className="stat-value text-primary text-3xl">
								{following}
							</div>
						</div>

						<div className="stat ">
							<div className="font-bold">
								<BiBookBookmark className="inline mb-1" />{" "}
								Public Repositories
							</div>
							<div className="stat-value text-primary text-3xl">
								{public_repos}
							</div>
						</div>
						<div className="stat ">
							<div className="font-bold">
								<BiBookmarkAlt className="inline mb-1" /> Public
								Gists
							</div>
							<div className="stat-value text-primary text-3xl">
								{public_gists}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stats;
