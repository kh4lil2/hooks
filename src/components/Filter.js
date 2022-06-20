import React from 'react'
import StarRatingComponent  from 'react-star-rating-component'

const Filter = ({getSearch,getstar}) => {
  return (
    <div className='nav'>
        <h1>FLIX</h1>
    <div className='search'>
      <input type="text" onChange={(e)=>getSearch(e.target.value)} />
      <StarRatingComponent
        className="stars"
        name="stars"
        starCount={10}
        onStarClick={(star)=>getstar(star)}
        />
    </div>
    </div>
  )
}

export default Filter
