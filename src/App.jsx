import Github from "./components/Github";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {
	return (
		<div className="App bg-black">
			<Navbar />
			<Hero />
			<Stats />
			<Github />
		</div>
	);
}

export default App;
