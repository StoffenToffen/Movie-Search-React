import SearchBar from "./ui/SearchBar";

const Header = ({ setSrcParamFn }) => {
	return (
		<header className="shadow-[0_60px_60px] shadow-shadow flex flex-col items-center relative overflow-hidden">
			<img
				src="moviebackground.jpg"
				alt="several horror movie posters"
				className="opacity-30 absolute -z-10 max-w-none"
			/>

			<h1 className="text-5xl font-extralight mt-44 xs:text-6xl sm:mt-38">
				Ticket<span className="colored-text">+</span>
			</h1>
			<p className="text-lg font-light text-center mt-2.5 px-4 xs:text-xl">
				With over <span className="colored-text">3000 </span>movies on Ticket
				<span className="colored-text">+</span>, the possibilites are endless!
			</p>
			<SearchBar setSrcParamFn={setSrcParamFn} />
		</header>
	);
};

export default Header;
