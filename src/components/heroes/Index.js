import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Card from './Card'

class HeroesIndex extends React.Component {
  constructor() {
    super()

    this.state = { heroes: []}
  }

  componentDidMount() {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(res => this.setState({ heroes: res.data }))
  }

  render() {
    console.log(this.state)
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-fifth">
            </div>
            <div className="column is-four-fifths">
              <div className="columns is-multiline">
                {this.state.heroes.map(hero =>
                  <div
                    key={hero.id}
                    className="column is-one-third-desktop"
                  >
                    <Link to={`/heroes/${hero.id}`}>
                      <Card
                        name={hero.name}
                        image={hero.images.lg}
                        publisher={hero.biography.publisher}
                        alignment={hero.biography.alignment}
                      />
                    </Link>

                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HeroesIndex
