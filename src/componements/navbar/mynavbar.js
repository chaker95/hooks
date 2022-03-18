import react , {useState}from 'react' ;
import ReactStars from "react-rating-stars-component";
import './mynavbar.css' ;
import { Navbar,  Form, FormControl,  Nav,  } from 'react-bootstrap';

function MyNavBar ({ getSearchInput }) {

  const ratingChanged = (newRating) => {
    getRateInput(newRating)
  };


const handleSearch =(e) =>{
  setSearchInput(e.target.value)
}

  return(
      <Navbar bg="dark" variant="dark" className="MyNavBar">
          <Navbar.Brand href="#home">Cinema</Navbar.Brand>
          <Nav className="ne-auto">
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="#features">Features</Nav.Link>
                   <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text " placeholder="search" className="nr-sn-2" className="SearchInput"  onChange={handleSearch} />
            <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700"/>,
 
          </Form>
      </Navbar>
 
        
    )
};

export default MyNavBar  ;