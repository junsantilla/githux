import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

	const location = useLocation();

	useEffect(() => {
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

		fetchUser();
	}, []);

	return (
		<GithubContext.Provider
			value={{
				user,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
