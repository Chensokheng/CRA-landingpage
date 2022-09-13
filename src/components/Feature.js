import React from "react";

export default function Feature() {
	const features = [
		{
			title: "Less to Learn",
			description:
				"You don't need to learn and configure many build tools. Instant reloads help you focus on development. When it's time to deploy, your bundles are optimized automatically",
		},
		{
			title: "No Lock-In",
			description:
				'Under the hood, we use webpack, Babel, ESLint, and other amazing projects to power your app. If you ever want an advanced configuration, you can "eject" from Create React App and edit their config files directly.',
		},
		{
			title: "Only One Dependency",
			description:
				"Your app only needs one build dependency. We test Create React App to make sure that all of its underlying pieces work together seamlessly – no complicated version mismatches.",
		},
	];

	return (
		<div className="min-h-100 w-full flex justify-center items-center py-10">
			<div className="w-full">
				<div className="max-w-7xl grid md:grid-cols-3 gap-5  mx-auto">
					{features.map(({ title, description }, index) => {
						return (
							<div
								className="ring-1 ring-zinc-600 p-5 rounded-md"
								key={index}
							>
								<h1 className="text-gray-100 text-3xl font-bold">
									{title}
								</h1>
								<p className="mt-5 text-gray-300">
									{description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
