import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);

	const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

	const location = useLocation();

	useEffect(() => {
		const fetchUser = async () => {
			const response = await fetch(
				`https://api.github.com${location.pathname}`,
				{
					headers: {
						Authorization: `token ${GITHUB_TOKEN}`,
					},
				}
			);
			const data = await response.json();
			setUser(data);
		};

		fetchUser();

		const fetchRepos = async () => {
			const params = new URLSearchParams({
				sort: "created",
				per_page: 9,
			});

			const response = await fetch(
				`https://api.github.com${location.pathname}/repos?${params}`,
				{
					headers: {
						Authorization: `token ${GITHUB_TOKEN}`,
					},
				}
			);

			const repos = await response.json();
			setRepos(repos);
		};

		fetchRepos();
	}, []);

	return (
		<GithubContext.Provider
			value={{
				user,
				repos,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
