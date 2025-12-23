const MovieSkeleton = () => {
	return (
		<figure className="my-6 mx-2 rounded-lg w-31 xs:w-45 md:w-49.5">
			<div className="skeleton w-full h-72 mb-4">
				<div className="skeleton-gradients" />
			</div>
			<div className="skeleton rounded-lg h-8">
				<div className="skeleton-gradients" />
			</div>
		</figure>
	);
};

export default MovieSkeleton;
