import Github from "./components/Github";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App bg-black">
			<Navbar />
			<Hero />
			<Github />
		</div>
	);
}

export default App;
