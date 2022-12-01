import { useContext, createContext, useState, useEffect } from "react";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const fetchUser = async () => {
			const response = await fetch(
				"https://api.github.com/users/junsantilla"
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
