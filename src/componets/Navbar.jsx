import React from 'react';
import { Link } from 'react-router-dom';
import { BiMovie, BiSearchAlt} from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav id="navbar">
        <h2>
          <Link to='/'><BiMovie /> Library</Link>
        </h2>
        <form>
            <input type='text' placeholder='Busque um filme' />
            <button type='submit'>
                <BiSearchAlt />
            </button>
        </form>
      </nav>
  )
}

export default Navbar