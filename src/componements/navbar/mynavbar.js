// import react, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./mynavbar.css";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";

function MyNavBar({ setRateInput, setSearchInput }) {
    const ratingChanged = (newRating) => {
        setRateInput(newRating);
    };

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <Navbar bg="dark" variant="dark" className="MyNavBar">
            <Nav className="ne-auto">
                <Navbar.Brand href="#home">Cinema</Navbar.Brand>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    className="reactstars"
                 />
            <Form
                style={{
                    display: "flex",
                    justifyContent: "spaceAround",
                    alignItems: "center",
                    width: "400px",
                }}
            >
                <FormControl
                    type="text "
                    placeholder="search"
                    className="nr-sn-2 SearchInput"
                    onChange={handleSearch}
                />
               
            </Form>
        </Navbar>
    );
}

export default MyNavBar;
