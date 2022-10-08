import { NavLink } from 'react-router-dom'

export default function Navbar () {

  const setActiveClass = ({ isActive }) => (isActive ? 'active' : "no-active")

  return (
    
    <nav>
      <div>
        <img src='https://cdn-icons-png.flaticon.com/512/588/588316.png'width="120px" alt=""/>
       {'   '} POKE APP{' - '}
          <NavLink className={setActiveClass} end to='/'>  
       <img src='https://cdn-icons-png.flaticon.com/512/188/188926.png' width="60px" className='ml-2 pr-2' alt=""/> Home
      </NavLink>
      {' - '}
      <NavLink className={setActiveClass} to='/pokemones'>
       <img src='https://cdn-icons-png.flaticon.com/512/188/188983.png'width="60px" alt="" /> Pokémon
        </NavLink>
        {' - '}
      <NavLink className={setActiveClass} to='/pokemones/:name'>
       <img src='https://cdn-icons-png.flaticon.com/512/189/189015.png'width="60px" alt=""/> Select
        </NavLink>
        {' - '}
      <NavLink className={setActiveClass} to='/favorites'>
       <img src='https://cdn-icons-png.flaticon.com/512/188/188932.png'width="60px" alt="" /> Favoritos
          </NavLink>
    </div>
    </nav>
  )
}

