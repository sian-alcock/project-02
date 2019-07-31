import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'


class HeroShow extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    axios.get(`https://akabab.github.io/superhero-api/api/id/${this.props.match.params.id}.json`)
      .then(res => this.setState({ hero: res.data}))
  }

  render() {
    if(!this.state.hero) return null
    return (
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Vertical...</p>
                <p className="subtitle">Top tile</p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">...tiles</p>
                <p className="subtitle">Bottom tile</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">{this.state.hero.name}</p>
                <p className="subtitle">Full name: {this.state.hero.biography.fullName}</p>
                <figure className="image is-4by3">
                  <img src={this.state.hero.images.lg} />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Tall tile</p>
              <p className="subtitle">With even more content</p>
              <div className="content">
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }




}

export default HeroShow
