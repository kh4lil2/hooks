import React from 'react'
import MovieCard from './MovieCard'
const MovieList = (props) => {
  return (
    <div className='list'>
      {props.movies.map(el=><MovieCard title={el.title}description={el.description} rating={el.rating} posterURL={el.posterURL}/>)}
    </div>
  )
}

export default MovieList
