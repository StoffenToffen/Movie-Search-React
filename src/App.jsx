import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/footer";
import MoviePage from "./pages/MoviePage";

function App() {
	const [srcParam, setSrcParam] = useState("Avengers");
	const [movies, setMovies] = useState([]);
	const [isError, setIsError] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const setSrcParamFn = (e, inputRef) => {
		if (e.type === "click") {
			setSrcParam(inputRef.current.value);
			if (location.pathname !== "/search") navigate("/search");
		} else if (e.key === "Enter") {
			setSrcParam(e.target.value);
			if (location.pathname !== "/search") navigate("/search");
		}
	};

	useEffect(() => {
		(async () => {
			try {
				setMovies([]);
				setIsError(false);
				const { data } = await axios.get(
					`https://www.omdbapi.com/?apikey=caccfb1f&s=${srcParam}`,
				);
				setTimeout(() => setMovies(data.Search), 500);
				data.Search.slice(0, 10);
			} catch (err) {
				console.error(err);
				setIsError(true);
			}
		})();
	}, [srcParam]);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							setSrcParamFn={setSrcParamFn}
							setSrcParam={setSrcParam}
							movies={movies}
							isError={isError}
						/>
					}
				/>
				<Route
					path="/search"
					element={
						<SearchPage
							setSrcParamFn={setSrcParamFn}
							srcParam={srcParam}
							movies={movies}
							isError={isError}
						/>
					}
				/>
				<Route
					path="/movie/:movieId"
					element={
						<MoviePage
							setSrcParamFn={setSrcParamFn}
							movies={movies}
							setIsError={setIsError}
							isError={isError}
						/>
					}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
