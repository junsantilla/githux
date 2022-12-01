import { useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
	const { user } = useContext(GithubContext);
	const { html_url, login } = user;

	return (
		<div className="bg-base-200 flex justify-center py-2">
			<div className="navbar max-w-5xl">
				<div className="navbar-start">
					<div className="dropdown">
						<label
							tabIndex={0}
							className="btn btn-square bg-black border-0"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-base-100 w-52"
						>
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="navbar-center">
					<a className="btn btn-ghost font-bold text-xl">{login}</a>
				</div>
				<div className="navbar-end">
					<a
						href={html_url}
						className="btn bg-black border-0"
						target="_blank"
					>
						<AiFillGithub className="mr-2 " /> View on github
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
