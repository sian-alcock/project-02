import React from 'react'

const IndexCard = (props) => {
  return (
    <div className="card">
      <div className="card-header is-family-primary">
        <div className="card-header-title">{props.name}</div>
      </div>
      <div className="card-image">
        <figure className="image" style={{backgroundImage: `url(${props.image}`}}>
        </figure>
      </div>
      <div className="card-content is-family-secondary">
        <p className="notes">{props.publisher}</p>
        <p className="notes">{props.alignment}</p>
        <a className="notes">{props.link}</a>
      </div>
    </div>
  )
}

export default IndexCard
