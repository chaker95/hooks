
import {Link , useParams} from 'react-router-dom';

function About({ movieData}) {
  const { id } =useParams () ;
  const movie = movieData.find( movie => id == movie.id ) ;
  console.log(id)

  return (
    <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <iframe 
        width="853" 
        height="480" 
        src={movie.trailer}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write;encrypted-media; gyroscope;picture-in-picture"
        allowFullScreen>
            
          </iframe>
          <p style={{fontSize:'20px', margin:'20px', width:'65%'}}>{movie.description}</p>
          <Link to={"/"} >
            <button style={{backgroundColor:'red',borderRadius:'20px', fontSize:'30px'}}>go home</button>
          </Link> 
    </div>

    

  );
}

export default About ;