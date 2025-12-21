import { useEffect, useState } from "react";
import Header from "./components/Header";
import Recommendations from "./components/Recommendations";
import axios from "axios";

function App() {
	const [srcParam, setSrcParam] = useState("Avengers");
	const [movies, setMovies] = useState([]);

	const setSrcParamFn = (e, inputRef) => {
		if (e.type === "click") setSrcParam(inputRef.current.value);
		else if (e.key === "Enter") setSrcParam(e.target.value);
	};

	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get(
					`https://www.omdbapi.com/?apikey=caccfb1f&s=${srcParam}`,
				);
				setMovies(data.Search);
			} catch (err) {
				console.error(err);
			}
		})();
	}, [srcParam]);

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const min = 4000000;
	// 			const max = 4100000;
	// 			const ranNum = () => Math.floor(Math.random() * (max - min)) + min;

	// 			const promises = new Array(6).fill(null).map(async () => {
	// 				const { data } = await axios.get(
	// 					`https://www.omdbapi.com/?apikey=caccfb1f&i=tt${ranNum()}`,
	// 				);
	// 				return data;
	// 			});
	// 			const results = await Promise.all(promises);
	// 			setMovies(results.filter(movie => movie.Response !== "False"));
	// 		} catch (err) {
	// 			console.error(err);
	// 		}
	// 	})();
	// }, []);

	return (
		<>
			<Header setSrcParamFn={setSrcParamFn} />
			<Recommendations srcParam={srcParam} movies={movies} />
		</>
	);
}

export default App;
