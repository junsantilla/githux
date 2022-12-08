import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);

	const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

	const location = useLocation();

	const fetchUser = async () => {
		const response = await fetch(
			`https://api.github.com/users${location.pathname}`,
			{
				headers: {
					Authorization: `token ${GITHUB_TOKEN}`,
				},
			}
		);

		const data = await response.json();
		setUser(data);
	};

	const fetchRepos = async () => {
		const params = new URLSearchParams({
			sort: "created",
			per_page: 12,
		});

		const response = await fetch(
			`https://api.github.com/users${location.pathname}/repos?${params}`,
			{
				headers: {
					Authorization: `token ${GITHUB_TOKEN}`,
				},
			}
		);

		const repos = await response.json();
		setRepos(repos);
	};

	return (
		<GithubContext.Provider
			value={{
				user,
				repos,
				fetchUser,
				fetchRepos,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
