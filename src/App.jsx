import { BrowserRouter as Rounter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
	return (
		<div className="App bg-black">
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/:login" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
