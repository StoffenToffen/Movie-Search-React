/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
import Movie from "./ui/Movie";
import MovieSkeleton from "./ui/MovieSkeleton";

const Recommendations = ({ movies, isError }) => {
	return (
		<section
			id="recommendations"
			className="flex flex-col items-center my-20 mx-4 md:mx-10"
		>
			<div className="flex flex-col gap-15 w-full md:w-9/10">
				<h2 className="text-center text-3xl font-extralight md:text-start">
					Recommendations
				</h2>
				<div className="flex flex-wrap justify-around">
					{movies?.length > 0 ? (
						movies
							.slice(0, 6)
							.map((movie, i) => <Movie key={i} movie={movie} />)
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

export default Recommendations;
