import React from "react";

function Hero() {
	return (
		<>
			<div className="flex justify-center">
				<div className="w-full max-w-5xl self-center px-2 py-16">
					<div className="flex text-base-100 ">
						<img
							src="https://avatars.githubusercontent.com/u/12028063?v=4"
							alt="profile image"
							className="w-48 profile-image"
						/>
						<div className="details ml-7">
							<h1 className="text-5xl font-bold mb-2">
								Jun Santilla
							</h1>
							<div className="block">
								<span>$ </span>Front-end developer
							</div>
							<div className="block">
								<span>{">"} Company: </span>
								<span>None</span>
							</div>
							<div className="block">
								<span>{">"} Location: </span>
								<span>Quezon City</span>
							</div>
							<div className="block">
								<span>{">"} Website: </span>
								<span className="underline">
									<a href="https://junsantilla.com/">
										https://junsantilla.com/
									</a>
								</span>
							</div>
							<div className="block">
								<span>{">"} Twitter: </span>
								<span className="underline">
									<a href="https://twitter.com/junsantilla">
										https://twitter.com/junsantilla
									</a>
								</span>
							</div>
							<div className="block">
								<span>{">"} Email: </span>
								<span className="underline">
									<a href="mailto:junsantilla@live.com">
										junsantilla@live.com
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
