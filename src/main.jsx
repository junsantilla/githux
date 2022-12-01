import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Rounter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { GithubProvider } from "./context/github/GithubContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Rounter>
			<GithubProvider>
				<App />
			</GithubProvider>
		</Rounter>
	</React.StrictMode>
);
