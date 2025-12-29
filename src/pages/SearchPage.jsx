/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
import Nav from "../components/Nav";
import Recommendations from "../components/Recommendations";
import Movie from "../components/ui/Movie";
import MovieSkeleton from "../components/ui/MovieSkeleton";
import SearchBar from "../components/ui/SearchBar";

const SearchPage = ({ setSrcParamFn, srcParam, movies, isError }) => {
	return (
		<>
			<div className="nav-wrapper">
				<Nav setSrcParamFn={setSrcParamFn} />
			</div>

			<section className="recommendations-container my-30">
				<div
					className="flex flex-col items-center
					lg:flex-row lg:justify-between"
				>
					<h2
						className="recommendations-header flex flex-col justify-center items-center gap-2 mt-10
						lg:flex-row lg:justify-start lg:gap-6 lg:mt-0"
					>
						Search results for:
						<span className="colored-text text-shadow-[0_0_10px,0_0_10px] text-shadow-accent border-b border-accent py-2">
							{srcParam}
						</span>
					</h2>
					<SearchBar setSrcParamFn={setSrcParamFn} />
				</div>
				<Recommendations length={10} movies={movies} isError={isError} />
			</section>
		</>
	);
};

export default SearchPage;
