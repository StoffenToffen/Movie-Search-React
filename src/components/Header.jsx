import { Search, Settings } from "lucide-react";
import { useRef } from "react";

const Header = ({ setSrcParamFn }) => {
	const navInputRef = useRef(null);
	const inputRef = useRef(null);

	return (
		<header className="shadow-[0_60px_60px] shadow-shadow flex flex-col items-center relative overflow-hidden">
			<img
				src="moviebackground.jpg"
				alt="several horror movie posters"
				className="opacity-30 absolute -z-10 max-w-none"
			/>

			<nav>
				<div className="flex items-center gap-8">
					<img
						src="movielogo.png"
						alt="Ticket pluss logo"
						className="invert-90 w-full max-w-18 mr-4 md:max-w-20"
					/>
					<a href="index.html" className="nav-link">
						Home
					</a>
					<a href="index.html" className="nav-link">
						Contact
					</a>
				</div>
				<div className="flex items-center gap-4 relative">
					<Search
						className="absolute left-2 cursor-pointer invisible sm:visible"
						onClick={() => navInputRef.current.focus()}
					/>
					<input
						type="text"
						placeholder="Find a movie"
						ref={navInputRef}
						onKeyUp={setSrcParamFn}
						className="bg-none w-0 border-2 border-transparent rounded-full outline-none py-3 pr-1 pl-8 text-sm cursor-default invisible transition-all duration-400 focus:w-50 focus:border-secondary focus:cursor-text sm:visible md:focus:w-60"
					/>
					<Settings className="cursor-not-allowed invisible sm:visible" />
				</div>
			</nav>

			<h1 className="text-5xl font-extralight mt-22 xs:text-6xl xs:mt-15 sm:mt-11">
				Ticket<span className="colored-text">+</span>
			</h1>
			<p className="text-lg font-light text-center mt-2.5 px-4 xs:text-xl">
				With over <span className="colored-text">3000 </span>movies on Ticket
				<span className="colored-text">+</span>, the possibilites are endless!
			</p>
			<div className="relative mt-10 mb-15">
				<input
					type="text"
					placeholder="Find a movie"
					ref={inputRef}
					onKeyUp={setSrcParamFn}
					className="bg-none text-xl border-2 border-secondary rounded-full outline-none py-4 px-8 transition duration-300 focus:shadow-[0_0_8px] focus:shadow-accent focus:scale-102 xs:py-6 xs:pr-16 xs:pl-8"
				/>
				<Search size={30}
					className="text-2xl absolute top-1/2 right-6 -translate-y-1/2 cursor-pointer transition duration-300 hover:scale-105"
					onClick={(e) => setSrcParamFn(e, inputRef)}
				/>
			</div>
		</header>
	);
};

export default Header;
