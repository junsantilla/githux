import { useParams } from "react-router-dom";
import Github from "../components/Github";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";

function Profile() {
	const params = useParams();
	console.log(params.user);
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
