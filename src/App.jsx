import { BrowserRouter as Rounter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
	return (
		<div className="App bg-black">
			<Routes>
				<Route path="/:login" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
