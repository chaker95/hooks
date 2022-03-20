import { Card , Button } from "react-bootstrap" ;
import "./MovieCard.css" ;
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom' ;

function MovieCard({movie}) {
    return (
         <>
              
            <Card style={{width:"18rem", height:"500px", }}>
                <Card.Img variant="top" src={movie.posterUrl} height="60% " />
                <Card.Body>
                    <Card.Title style={{textAlign:"center"}}>{movie.title}</Card.Title>
                    <ReactStars count={5} value={movie.rating} isHalf={true} size={24} activeColor="#ffd700" edit={false}/>
                </Card.Body>
              <Link to={`/about/${movie.id}`} >
                <Card.Footer >
                        <Button style={{marginLeft:'100px'}} variant="primary" >About</Button>
                        
                </Card.Footer>
            
               </Link>
                  </Card>
            
            
         </>   
    )
} ;

export default MovieCard   ;
