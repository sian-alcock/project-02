import React from 'react'
import axios from 'axios'
import _ from 'lodash'

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

  getPowerstats() {

  }

  render() {
    if(!this.state.hero) return null
    return (
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification">
                <p className="title">Powerstats</p>
                <div className="content">
                  <p><strong>Intelligence: </strong>{this.state.hero.powerstats.intelligence}
                  </p>
                  <p><strong>Strength: </strong>{this.state.hero.powerstats.strength}
                  </p>
                  <p><strong>Speed: </strong>{this.state.hero.powerstats.speed}
                  </p>
                  <p><strong>Durability: </strong>{this.state.hero.powerstats.durability}
                  </p>
                  <p><strong>Power: </strong>{this.state.hero.powerstats.power}
                  </p>
                  <p><strong>Combat: </strong>{this.state.hero.powerstats.combat}
                  </p>
                </div>
              </article>
              <article className="tile is-child notification">
                <p className="title">Appearance</p>
                <div className="content">
                  <p><strong>Gender: </strong>{this.state.hero.appearance.gender}
                  </p>
                  <p><strong>Race: </strong>{this.state.hero.appearance.race}
                  </p>
                  <p><strong>Height: </strong>{this.state.hero.appearance.height[1]}
                  </p>
                  <p><strong>Weight: </strong>{this.state.hero.appearance.weight[1]}
                  </p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification">
                <p className="title">{this.state.hero.name}</p>
                <p className="subtitle">Full name: {this.state.hero.biography.fullName}</p>
                <figure className="image">
                  <img src={this.state.hero.images.lg} />
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification">
              <p className="title">Biography</p>
              <div className="content">
                <p><strong>Alter Egos: </strong>{this.state.hero.biography.alterEgos}
                </p>
                <p><strong>Aliases: </strong>{this.state.hero.biography.aliases}
                </p>
                <p><strong>Place of Birth: </strong>{this.state.hero.biography.placeOfBirth}
                </p>
                <p><strong>First Appearance: </strong>{this.state.hero.biography.firstAppearance}
                </p>
                <p><strong>Publisher: </strong>{this.state.hero.biography.publisher}
                </p>
                <p><strong>Alignment: </strong>{_.startCase(this.state.hero.biography.alignment)}
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title">Group Affiliation</p>
              <div className="content">
                <p>{this.state.hero.connections.groupAffiliation}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }




}

export default HeroShow
