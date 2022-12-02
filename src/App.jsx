import { BrowserRouter as Rounter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { GithubProvider } from "./context/github/GithubContext";

function App() {
	return (
		<Rounter>
			<GithubProvider>
				<div className="App bg-black">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/:login" element={<Profile />} />
					</Routes>
				</div>
			</GithubProvider>
		</Rounter>
	);
}

export default App;
