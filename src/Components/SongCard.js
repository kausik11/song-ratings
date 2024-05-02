import React from 'react';
import PropTypes from 'prop-types';
import Ratings from './Ratings';

const SongCard = ({data}) => {
    const{id,thumb,title,artist,rating}=data;
  return (
    <div className='song-card'>
     <img src={thumb} alt={title}/>
     <div className='song-title'>{title}</div>
     <Ratings stars={rating}/>
    </div>
  )
}

SongCard.prototype = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        thumb: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        artist: PropTypes.string.isRequired,
        rating:PropTypes.number.isRequired
        
    })
}


export default SongCard
