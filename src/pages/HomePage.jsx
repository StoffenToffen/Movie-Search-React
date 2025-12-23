import { useEffect } from "react";
import Header from "../components/Header";
import Recommendations from "../components/Recommendations";

const HomePage = ({ setSrcParamFn, setSrcParam, movies, isError }) => {
	useEffect(() => {
		setSrcParam("avengers");
	}, [setSrcParam]);

	return (
		<>
			<Header setSrcParamFn={setSrcParamFn} />
			<Recommendations movies={movies} isError={isError} />
		</>
	);
};

export default HomePage;
