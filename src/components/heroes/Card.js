import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">{props.name}</div>
      </div>
      <div className="card-image">
        <figure className="image" style={{backgroundImage: `url(${props.image}`}}>
        </figure>
      </div>
      <div className="card-content">
        <p className="notes">{props.publisher}</p>
        <p className="notes">{props.alignment}</p>

      </div>
    </div>
  )
}

export default Card
