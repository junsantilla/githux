import { BrowserRouter as Rounter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
	return (
		<div className="App bg-black">
			<Rounter>
				<Routes>
					<Route path="/:user" element={<Profile />} />
				</Routes>
			</Rounter>
		</div>
	);
}

export default App;
