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
        <p className="notes"><strong>Intelligence:</strong> {props.intelligence}</p>
        <p className="notes"><strong>Strength:</strong> {props.strength}</p>
        <p className="notes"><strong>Speed:</strong> {props.speed}</p>
        <p className="notes"><strong>Durability:</strong> {props.durability}</p>
        <p className="notes"><strong>Power:</strong> {props.power}</p>
        <p className="notes"><strong>Combat:</strong> {props.combat}</p>
      </div>
    </div>
  )
}

export default Card
