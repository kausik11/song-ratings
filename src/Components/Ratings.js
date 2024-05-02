import React from 'react'

const Ratings = ({stars}) => {
  return (
    <div className='rating'>
    {/* {[...new Array(Math.round(stars <= 5 ? stars : 0)).keys()].map(value=>{console.log(value); return <div className='star' key={value}></div>})} */}
    {Array.from({length:stars},(_,index)=>{return(<div className='star' key={index}></div>)})}
    </div>
  )
}

export default Ratings;
