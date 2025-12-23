import { Clock, Globe2, Star } from "lucide-react";

const Movie = ({ movie: { Poster, Title } }) => {
	return (
		<figure className="relative group shadow-[0_8px_12px] shadow-shadow my-6 mx-2 rounded-lg max-w-31 overflow-hidden cursor-pointer xs:max-w-45 md:max-w-49.5">
			<img
				src={Poster}
				alt={Title}
				className="w-full h-full object-cover transition duration-400 group-hover:blur-xs group-hover:opacity-50 group-hover:scale-105"
			/>

			<div className="flex flex-col justify-between absolute inset-0 my-6 mx-4 opacity-0 transition duration-400 group-hover:opacity-100">
				<h3 className="text-xs xs:text-base md:text-xl">{Title}</h3>

				<div className="flex flex-col gap-4 xs:gap-8 xs:mb-4 md:mb-9">
					<div className="flex justify-between items-center">
						<Clock className="w-3 xs:w-5" />
						<p className="font-semibold text-xs xs:text-base">136m</p>
					</div>

					<div className="flex justify-between">
						<Star className="w-3 xs:w-5" />
						<p className="font-semibold text-xs xs:text-base">4.5</p>
					</div>

					<div className="flex justify-between">
						<Globe2 className="w-3 xs:w-5" />
						<p className="font-semibold text-xs xs:text-base">English</p>
					</div>
				</div>
			</div>
		</figure>
	);
};

export default Movie;
