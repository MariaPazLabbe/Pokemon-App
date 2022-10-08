import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const DetailsPkm = () => {
  const [poke, setPoke] = useState();

  const { name } = useParams();

  useEffect(() => {
    const getAPI = async () => {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const datos = await resp.json();
      setPoke(datos);
    };

    getAPI();
  }, []);

  return (
      <>
          <Container className="result">
              <rol>
      <h1 className="title2">Características Pokémon</h1>
      {poke && (
        <>
          <div className="imgP">
            <h2>Nombre: {poke.name}</h2>
            <img src={poke.image} />
            <img
              src={poke.sprites?.other.home.front_default}
              alt={poke.name}
              className="pokemon-img"
            />
            <ul className="list">
              <li>hp: {poke.stats[1].base_stat}</li>
              <li>attack: {poke.stats[2].base_stat}</li>
              <li>defense: {poke.stats[3].base_stat}</li>
              <li>special-attack: {poke.stats[4].base_stat}</li>
              <li>type: {poke.types[0].type.name}</li>
            </ul>
          </div>
        </>
      )}

      <small className="text-muted">
        <Link to={`/pokemones`}>
          <button type="button" className="btn btn-dark">
            Volver a Pokémon
          </button>
        </Link>
                  </small>
                  </rol>
              </Container>
    </>
  );
};

export default DetailsPkm;
