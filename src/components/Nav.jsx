import { Menu, Search } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Nav = ({ setSrcParamFn }) => {
	const navInputRef = useRef(null);

	return (
		<nav className="group">
			<div className="z-10 flex items-center gap-8">
				<Link
					to="/"
					className="transition-opacity duration-400
group-focus-within:max-xs:pointer-events-none group-focus-within:max-xs:opacity-0"
				>
					<img
						src="movielogo.png"
						alt="Ticket pluss logo"
						className="invert-90 w-full max-w-18 mr-4 md:max-w-20"
					/>
				</Link>
				<Link to="/" className="nav-link">
					Home
				</Link>
				<Link to="/" className="nav-link">
					Contact
				</Link>
			</div>
			<div className="flex items-center gap-4 relative">
				<button
					type="button"
					className="absolute left-2 cursor-pointer"
					onClick={() => navInputRef.current.focus()}
				>
					<Search />
				</button>
				<input
					type="text"
					placeholder="Find a movie"
					ref={navInputRef}
					onKeyUp={setSrcParamFn}
					className="bg-none w-0 border-2 border-transparent rounded-full outline-none py-3 pr-1 pl-8 text-sm cursor-default transition-all duration-400 focus:w-50 focus:border-secondary focus:cursor-text md:focus:w-60"
				/>
				<Menu className="cursor-not-allowed" />
			</div>
		</nav>
	);
};

export default Nav;
