import Feature from "./components/Feature";
import GettingStarted from "./components/GettingStarted";
import HeroSection from "./components/HeroSection";

export default function App() {
	return (
		<div className="min-h-screen bg-primary py-10 px-5 md:px-0 flex flex-col gap-y-20">
			<HeroSection />
			<Feature />
			<GettingStarted />
		</div>
	);
}
