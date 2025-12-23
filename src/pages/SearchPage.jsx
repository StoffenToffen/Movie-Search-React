/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
import Movie from "../components/ui/Movie";
import MovieSkeleton from "../components/ui/MovieSkeleton";
import SearchBar from "../components/ui/SearchBar";

const SearchPage = ({ setSrcParamFn, srcParam, movies, isError }) => {
	return (
		<section
			id="SearchResults"
			className="flex flex-col items-center my-40 mx-4 md:mx-10"
		>
			<div className="flex flex-col gap-15 w-full md:w-9/10">
				<div className="flex flex-col items-center lg:flex-row lg:justify-between">
					<h2 className="flex flex-col justify-center items-center gap-2 text-3xl font-extralight lg:flex-row lg:justify-start lg:gap-6">
						Search results for:
						<span className="colored-text text-shadow-[1px_1px_10px,-1px_-1px_10px] text-shadow-accent text-lg border-b border-accent py-2 xs:text-2xl">
							{srcParam}
						</span>
					</h2>
					<SearchBar setSrcParamFn={setSrcParamFn} />
				</div>
				<div className="flex flex-wrap justify-around">
					{movies?.length > 0 ? (
						movies.map((movie, i) => <Movie key={i} movie={movie} />)
					) : isError ? (
						<h3 className="text-3xl font-extralight">Error loading movies</h3>
					) : (
						new Array(6).fill(null).map((_, i) => <MovieSkeleton key={i} />)
					)}
				</div>
			</div>
		</section>
	);
};

export default SearchPage;
