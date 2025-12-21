/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
import Movie from "./ui/Movie";

const Recommendations = ({ srcParam, movies }) => {
	return (
		<section
			id="recommendations"
			className="flex flex-col items-center my-20 mx-4 md:mx-10"
		>
			<div className="flex flex-col gap-15 w-full md:w-9/10">
				<h2 className="flex flex-col justify-center items-center gap-2 text-3xl font-extralight md:flex-row md:justify-start md:gap-6">
					Search results for:
					<span className="colored-text text-shadow-[1px_1px_10px,-1px_-1px_10px] text-shadow-accent text-lg border-b border-accent py-2 xs:text-2xl">
						{srcParam}
					</span>
				</h2>
				<div className="flex flex-wrap justify-around">
					{movies?.length > 0 ? (
						movies
							.slice(0, 6)
							.map((movie, i) => <Movie key={i} movie={movie} />)
					) : (
						<h3 className="text-3xl font-extralight">No results found</h3>
					)}
				</div>
			</div>
		</section>
	);
};

export default Recommendations;
