import React from "react";
import {
	BiUserPlus,
	BiUserCheck,
	BiBookBookmark,
	BiBookmarkAlt,
} from "react-icons/bi";

function Stats() {
	return (
		<>
			<div className="flex justify-center">
				<div className="w-full max-w-5xl self-center px-2">
					<div className="stats grid grid-cols-2 md:grid-cols-4 grid-flow-row rounded-none">
						<div className="stat ">
							<div className="stat-title">
								<BiUserPlus className="inline mb-1" /> Followers
							</div>
							<div className="stat-value text-primary text-3xl">
								25.6K
							</div>
						</div>

						<div className="stat ">
							<div className="stat-title">
								<BiUserCheck className="inline mb-1" />{" "}
								Following
							</div>
							<div className="stat-value text-primary text-3xl">
								2.6M
							</div>
						</div>

						<div className="stat ">
							<div className="stat-title">
								<BiBookBookmark className="inline mb-1" />{" "}
								Public Repositories
							</div>
							<div className="stat-value text-primary text-3xl">
								2.6M
							</div>
						</div>
						<div className="stat ">
							<div className="stat-title">
								<BiBookmarkAlt className="inline mb-1" /> Public
								Gists
							</div>
							<div className="stat-value text-primary text-3xl">
								2.6M
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stats;
