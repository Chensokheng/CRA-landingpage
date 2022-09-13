import React from "react";

export default function GettingStarted() {
	return (
		<div className="min-h-100 max-w-7xl mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2">
			<div className="md:pr-20 flex flex-col gap-y-5">
				<div>
					<h1 className="text-3xl font-bold text-gray-100">
						Get started in seconds
					</h1>
					<p className="text-gray-300 mt-3">
						{
							"Whether you’re using React or another library, Create React App lets you focus on code, not build tools."
						}
					</p>
				</div>
				<p className="text-gray-300 ">
					To create a project called my-app, run this command:
				</p>
				<div className="bg-gray-900 rounded-md py-5 px-3 text-gray-300">
					<p> {"> npx create-react-app my-app"}</p>
				</div>
			</div>
			<img
				alt="Easy to get started in seconds"
				src={
					"https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667"
				}
				className="ring-1 ring-green-500 rounded-md"
			/>
		</div>
	);
}
