import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import Recommendations from "../components/Recommendations";
import SearchBar from "../components/ui/SearchBar";
import { useEffect } from "react";

const HomePage = ({ setSrcParamFn, setSrcParam, movies, isError }) => {
	const location = useLocation();

	useEffect(() => {
		if (location.hash === "#contact") /* TODO continue on this */
			window.scrollTo(0, document.body.scrollHeight);
		else window.scrollTo(0, 0);
		setSrcParam("avengers");
	}, []);

	return (
		<>
			<Nav setSrcParamFn={setSrcParamFn} />

			<header className="shadow-[0_60px_60px] shadow-shadow flex flex-col items-center relative overflow-hidden">
				<img
					src="moviebackground.jpg"
					alt="several horror movie posters"
					className="opacity-30 absolute -z-10 max-w-none"
				/>

				<h1
					className="text-5xl font-extralight mt-44
				xs:text-6xl sm:mt-38"
				>
					Ticket<span className="colored-text">+</span>
				</h1>
				<p
					className="text-lg font-light text-center mt-2.5 px-4
				xs:text-xl"
				>
					With over <span className="colored-text">3000 </span>movies on Ticket
					<span className="colored-text">+</span>, the possibilites are endless!
				</p>
				<SearchBar setSrcParamFn={setSrcParamFn} />
			</header>

			<section className="recommendations-container">
				<h2 className="recommendations-header">Popular now</h2>
				<Recommendations length={6} movies={movies} isError={isError} />
			</section>
		</>
	);
};

export default HomePage;
