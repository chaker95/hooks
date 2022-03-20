import { useState } from "react";
import "./App.css";
import MyNavBar from "./componements/navbar/mynavbar";
import MovieList from "./componements/movielist/movielist";
import AddMovie from "./componements/addmovie/AddMovie";
import { Routes, Route,  } from "react-router-dom";
import About from "./componements/router/router";

function App() {
    let movies = [
        { 
            id:Math.random(),
            trailer:'https://www.youtube-nocookie.com/embed/mqqft2x_Aa4',
            title: "the batman",
            description:
                "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
            posterUrl: "https://t.ly/Q0hri",
            rating: 5,
        },
        {   
            id:Math.random(),
            trailer:'https://www.youtube-nocookie.com/embed/5zdBG-iGfes',
            title: "the king's man",
            description:
                "In the early years of the 20th century, the Kingsman agency is formed to stand against a cabal plotting a war to wipe out millions.",
            posterUrl: "https://t.ly/PFgc",
            rating: 5,
        },
        { 
            id:Math.random(),
            trailer:'https://www.youtube-nocookie.com/embed/0IOsk2Vlc4o',
            title: "bullet train",
            description:
                "Five assassins aboard a fast moving bullet train find out their missions have something in common.",
            posterUrl: "https://t.ly/ojip",
            rating: 4,
        },
        {
            id:Math.random(),
            trailer:'https://www.youtube-nocookie.com/embed/A5GJLwWiYSg',
            title: "west side story",
            description:
                "An adaptation of the 1957 musical, West Side Story explores forbidden love and the rivalry between the Jets and the Sharks, two teenage street gangs of different ethnic backgrounds.",
            posterUrl: "https://t.ly/kyNO",
            rating: 4,
        },
        {
            id:Math.random(),
            trailer:'https://www.youtube-nocookie.com/embed/X2m-08cOAbc',
            title: "free guy",
            description:
                "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
            posterUrl: "https://t.ly/XMVl",
            rating: 3,
        },
        {
            id:Math.random(),
            trailer:'https://www.youtube-nocookie.com/embed/eHp3MbsCbMg',
            title: "uncharted",
            description:
                "Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor 'Sully' Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada.",
            posterUrl: "https://t.ly/ison",
            rating: 3,
        },
        {
            id:Math.random(),
            trailer:'https://www.youtube-nocookie.com/embed/Y5zWli7ckCM',
            title: "spider-man",
            description:
                "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
            posterUrl: "https://t.ly/MbHA",
            rating: 2,
        },
        {
            id:Math.random(),
            trailer:'https://www.youtube-nocookie.com/embed/GFvupyiNEz0',
            title: "no exit",
            description:
                "During a blizzard and stranded at an isolated highway rest stop in the mountains, a college student discovers a kidnapped child hidden in a car belonging to one of the people inside.",
            posterUrl: "https://t.ly/4D7S",
            rating: 1,
        },
    ];
    const [movieData, setMoviesData] = useState(movies);
    const [searchInput, setSearchInput] = useState("");
    const [RateInput, setRateInput] = useState(0);

    const getSearchInput = (input) => {
        setSearchInput(input);
    };

    const getRateInput = (input) => {
        setRateInput(input);
    };
    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        posterUrl: "",
        rating: "",
    });
    const getNewMovie = (newMovie) => {
        setMoviesData(newMovie);
    };

    return (
        <div className="app">
            <Routes>
          
               <Route path="/about/:id" element={<About movieData={movieData} />} />
               <Route path="/" element={ 
              <div>
                      <MyNavBar
                setRateInput={setRateInput}
                setSearchInput={setSearchInput}
                />
        
                <div className="addmovie">
                    <AddMovie newMovie ={newMovie} setMoviesData={setMoviesData} moviesData={movieData} setNewMovie={setNewMovie} />
                </div>
                    <div>
                
                </div>
                <MovieList
                            moviesData={movieData}
                            searchInput={searchInput}
                            rateInput={RateInput}
                            
                            
                            />
            
              </div> 
               } />
            </Routes>
        </div>
    );
}

export default App;
