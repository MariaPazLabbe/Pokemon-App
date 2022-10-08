import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";
import GallerySearch from "../Components/GallerySearch";
import { Container } from "react-bootstrap";



const SearchPkm = () => {
  const { data } = useContext(Context);
  
  const navigate = useNavigate();

  const goPokemon = (name) => {
    navigate(`/pokemones/${name}`);
  }
  function organize(a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      }

  return (
    <>
      <Container>
        <rol>
        <div className='search'>
        <img src="https://cdn-icons-png.flaticon.com/512/287/287224.png" width="80px" className="my-4" alt="" />
        <h2>Selecciona un Pokemón</h2>
        <p className='arrow'>
        
        </p> 

            <select className='selector' onChange={event => goPokemon(event.target.value)}>
                <option value="">POKEMÓN</option>
                {data.results.sort(organize).map((poke) => (
                    <option key={poke.name} value={poke.name}> {poke.name}</option>
                ))}
            </select>
      </div>
          <GallerySearch />
          </rol>
        </Container>
        </>
    )
}


export default SearchPkm;
