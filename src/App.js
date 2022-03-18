import react  ,{useState} from 'react';
import './app.css'
import MyNavBar from './componements/navbar/mynavbar' ;
import MovieList from './componements/movielist/movielist';
import AddMovie from './componements/addmovie/AddMovie'


function App() {
  let movies = [
    { 
        title : "the batman",
        description : "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
        posterUrl:"https://t.ly/Q0hri" ,
        rating : 5 ,
          },
       {
         title : "the kings man",
         description : "",
         posterUrl:"https://t.ly/PFgc",
         rating : 5 ,
       }  ,
       {
          title : "bullet train",
          description : "",
          posterUrl:"https://t.ly/ojip",
          rating : 4 ,
       },
       {
        title : "west side story",
        description : "",
        posterUrl:"https://t.ly/kyNO",
        rating : 4 ,
      } ,  {
        title : "free guy",
        description : "",
        posterUrl:"https://t.ly/XMVl",
        rating : 3 ,
      } ,
      {
        title : "uncharted",
        description : "",
        posterUrl:"https://t.ly/ison",
        rating : 3 ,
      } ,
      {
        title : "spider-man",
        description : "",
        posterUrl:"https://t.ly/MbHA",
        rating : 2 ,
      } ,
      {
        title : "no exit",
        description : "",
        posterUrl:"https://t.ly/4D7S",
        rating : 1 ,
      } ,
    ] ;
    const [movieData,  setMoviesData] = useState (movies) ;
    const [searchInput, setSearchInput ] = useState("") ;
    const [RateInput, setRatechInput ] = useState(0) ;

    const getSearchInput =(input) => {
        setSearchInput(input) ;
    };

    const getRateInput =(input) => {
        setRatechInput(input) ;
    };
    const getNewMovie = (newMovie) => {
      setMoviesData(newMovie) ;
    } ;

  return (
    <div className="app">
    <MyNavBar
        getSearchInput={getSearchInput}
        getRateInput={getRateInput}
    />
    <div className='addmovie'>
    <AddMovie  getNewMovie={getNewMovie}/>

    </div>
    <MovieList 
        moviesData={moviesDta}
        searchInput={searchInput} 
        rateInput={RateInput} 
    />
    
    </div>
  )
};

export default App;
