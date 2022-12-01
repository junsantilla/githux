import React from "react";
import Navbar from "../components/Navbar";

function About() {
	return (
		<>
			<Navbar />
			<div className="flex justify-center min-h-[calc(100vh-90px)] text-base-100 ">
				<div className="w-full max-w-5xl px-2 py-16">
					A hacker view of your github profile
				</div>
			</div>
		</>
	);
}

export default About;
