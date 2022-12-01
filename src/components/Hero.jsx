import { useContext } from "react";
import GithubContext from "../context/github/GithubContext";

function Hero() {
	const { user } = useContext(GithubContext);

	const {
		avatar_url,
		location,
		bio,
		blog,
		login,
		twitter_username,
		company,
		email,
	} = user;

	return (
		<>
			<div className="flex justify-center">
				<div className="w-full max-w-5xl self-center px-2 py-16">
					<div className="flex text-base-100 ">
						<img
							src={avatar_url}
							alt="profile image"
							className="w-48 profile-image"
						/>
						<div className="details ml-7">
							<h1 className="text-5xl font-bold mb-2">{login}</h1>
							{bio && (
								<div className="block">
									<span>$ </span>
									{bio}
								</div>
							)}
							{company && (
								<div className="block">
									<span>{">"} Company: </span>
									<span>{company}</span>
								</div>
							)}
							{location && (
								<div className="block">
									<span>{">"} Location: </span>
									<span>{location}</span>
								</div>
							)}
							{blog && (
								<div className="block">
									<span>{">"} Website: </span>
									<span className="underline">
										<a href={blog}>{blog}</a>
									</span>
								</div>
							)}
							{twitter_username && (
								<div className="block">
									<span>{">"} Twitter: </span>
									<span className="underline">
										<a
											href={`https://twitter.com/${twitter_username}`}
										>
											https://twitter.com/
											{twitter_username}
										</a>
									</span>
								</div>
							)}
							{email && (
								<div className="block">
									<span>{">"} Email: </span>
									<span className="underline">
										<a href={`mailto:${email}`}>{email}</a>
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
