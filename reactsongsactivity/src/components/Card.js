import React from 'react'

const Card = props => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={props.song.cover} className="card-img-top" alt={props.song.title} />
      <div className="card-body">
        <h5 className="card-title">{props.song.title}</h5>
        <p className="card-text">{props.song.artist}</p>
      </div>
    </div>
  )
}

export default Card