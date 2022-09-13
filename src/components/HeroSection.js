import React, { useState } from "react";
import { SiReact } from "react-icons/si";

export default function HeroSection() {
	const [startAnimateTopBottom, setStartAnimateTopBottom] = useState(false);
	const [startAnimateBottom, setStartAnimateBottom] = useState(false);
	const [animateLogo, setAnimateLogo] = useState(false);

	return (
		<div className="min-h-100 flex flex-col gap-5 justify-center items-center">
			<div className="w-80 h-80 relative grid place-content-center">
				<div className=" w-72 h-72 flex justify-center items-center group relative hover:shadow-md transition-all">
					<div className=" absolute top-0 w-full grid grid-cols-2">
						<div className="h-1 w-full bg-green-400 animate-right-left"></div>
						<div
							className="h-1  w-full bg-green-400  animate-left-right"
							onAnimationEnd={() =>
								setStartAnimateTopBottom(true)
							}
						></div>
					</div>
					{/* ============================= */}
					<div
						className={`absolute left-0 top-0 h-full w-1 ${
							startAnimateTopBottom
								? "animate-top-bottom bg-green-400"
								: ""
						}`}
						onAnimationEnd={() => {
							setStartAnimateBottom(true);
						}}
					></div>

					<div
						className={`absolute right-0 top-0 h-full w-1 ${
							startAnimateTopBottom
								? "animate-top-bottom bg-green-400"
								: ""
						}`}
					></div>
					{/* ============================= */}

					<div className="absolute bottom-0 w-full grid grid-cols-2">
						<div
							className={`h-1 w-full ${
								startAnimateBottom
									? "bg-green-400  animate-left-right"
									: ""
							}`}
						></div>
						<div
							className={`h-1  w-full ${
								startAnimateBottom
									? "bg-green-400  animate-right-left"
									: ""
							} `}
							onAnimationEnd={() => {
								setAnimateLogo(true);
							}}
						></div>
					</div>
					<SiReact
						className={` text-green-400 opacity-0  ${
							animateLogo ? "animate-scale-reveal" : ""
						}`}
					/>
				</div>
				<div
					className={`absolute  bottom-0 h-4/5 w-1 ${
						startAnimateTopBottom
							? "animate-top-bottom bg-green-400"
							: ""
					}`}
				></div>
				<div
					className={` absolute bottom-0  h-1 w-4/5 ${
						startAnimateBottom
							? "bg-green-400  animate-left-right"
							: ""
					} `}
				></div>
			</div>
			<h1 className="text-5xl  font-bold text-gray-200 text-center animate-left-right-3s opacity-100">
				Create React App
			</h1>
			<p
				className={`text-gray-300 text-lg text-center animate-top-bottom opacity-100`}
			>
				Set up a modern web app by running one command.
			</p>
		</div>
	);
}
