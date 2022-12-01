import Github from "../components/Github";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";

function Profile() {
	return (
		<>
			<Navbar />
			<Hero />
			<Stats />
			<Github />
		</>
	);
}

export default Profile;
