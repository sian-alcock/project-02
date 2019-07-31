import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import _ from 'lodash'

import Card from './Card'

class HeroesIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      heroes: [],
      searchTerm: '',
      sortTerm: 'intelligence|desc'
    }

    this.filteredHeroes = this.filteredHeroes.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)


  }

  componentDidMount() {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(res => this.setState({ heroes: res.data }))
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({ sortTerm: e.target.value })
  }

  handleKeyUp(e) {
    this.setState({ searchTerm: e.target.value })
  }

  filteredHeroes() {
    const re = new RegExp(this.state.searchTerm, 'i')
    const [field, order] = this.state.sortTerm.split('|')

    const filteredHeroes = _.filter(this.state.heroes, hero => {
      return re.test(hero.name)
    })
    const sortedHeroes = _.orderBy(filteredHeroes, [field], [order])

    return sortedHeroes
  }

  render() {
    console.log(this.state)
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-fifth">
              <div className="field">
                <div className="control">
                  <input className="input" type="text" placeholder="search..." onKeyUp={this.handleKeyUp}/>
                </div>
              </div>
              <div className="field">
                <div className="select">
                  <select onChange={this.handleChange}>
                    <option value="powerstats.intelligence|desc">Intelligence</option>
                    <option value="powerstats.strength|desc">Strength</option>
                    <option value="powerstats.speed|desc">Speed</option>
                    <option value="powerstats.durability|desc">Durability</option>
                    <option value="powerstats.power|desc">Power</option>
                    <option value="powerstats.combat|desc">Combat</option>
                  </select>
                </div>
              </div>

            </div>
            <div className="column is-four-fifths">
              <div className="columns is-multiline">
                {this.filteredHeroes().map(hero =>
                  <div
                    key={hero.id}
                    className="column is-one-third-desktop is-half-tablet"
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
