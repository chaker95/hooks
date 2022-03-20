// import react from "react";
import MovieCard from "../moviecard/moviecard";
import './movielist.css';


function MovieList({ moviesData, searchInput, rateInput }) {
    return (
        <div className="movieList">
            {moviesData
                .filter(
                    (movies) =>
                        movies.title
                            .toLowerCase()
                            .includes(searchInput.toLowerCase().trim()) &&
                        movies.rating >= rateInput
                )
                .map((movie, index) => {
                    return <MovieCard movie={movie} key={index} />;
                })}
        </div>
    );
}

export default MovieList;
