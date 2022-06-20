import React from 'react'
import StarRatingComponent  from 'react-star-rating-component'

const MovieCard = (props) => {
  return (
    <div className='card'>
    <h1 className='title'>{props.title}</h1>
    <img className='img' src={props.posterURL}/>
    <div className='description'>
        <p className='para'>{props.description}</p>
        <StarRatingComponent
        className="stars"
        name="stars"
        value={props.rating}
        starCount={10}
        />
    </div>
    </div>
  )
}

export default MovieCard
