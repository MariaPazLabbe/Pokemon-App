import React from "react";
import { Container } from "react-bootstrap";
import Gallery from "../Components/Gallery";

const Home = () => (
    <>
        <div className="welcome">
            <Container>
                <rol>
        <h1>Bienvenido Maestro Pokémon</h1>
            <img className="img-pikachu mb-5" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png" alt="Pikachu Pokémon" /> 
                    <Gallery />
                    </rol>
            </Container>
        </div>
        <div>
            
        </div>
    </>
)

export default Home;
