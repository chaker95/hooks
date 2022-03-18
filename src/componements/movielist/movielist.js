import react from 'react' ; 
import MovieCard from './componements/moviecard/moviecard';

function MovieList ({moviesData, searchInput, rateInput   } ){
    return(
      <div className="movieList">
        {moviesData
        .filter(movies => movies.title.toLowerCase().includes(searchInput.toLowerCase().trim() ) && movie.rating >= ratingInput)
        .map((movie, index)  => <MovieCard movie={movie}  key={index} />)}

      </div>
        
    )
}

export default MovieList ;