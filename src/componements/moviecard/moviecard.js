// import react from "react";
import { Card , Button } from "react-bootstrap" ;
import "./MovieCard.css" ;
import ReactStars from "react-rating-stars-component";

function MovieCard({movie}) {
    return (
        <Card style={{width:"18rem"}}>
            <Card.Img variant="top" src={movie.posterUrl} height="60% " />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                        {movie.description}
                </Card.Text>
                <ReactStars count={5} value={movie.rating} isHalf={true} size={24} activeColor="#ffd700" edit={false}/>
            </Card.Body>
            <Card.Footer className="cardFooter">
                    <Button variant="primary" >Download</Button>
            </Card.Footer>
        </Card>
    )
} ;

export default MovieCard   ;
