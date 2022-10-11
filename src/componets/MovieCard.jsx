import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'

const imgUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className='movie-card'>
        <img src={ imgUrl + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
            <AiFillStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  )
}

export default MovieCard;