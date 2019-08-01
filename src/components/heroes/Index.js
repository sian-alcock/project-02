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
      filteredHeroes: [],
      searchTerm: '',
      sortTerm: 'name|asc'
    }

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFemale = this.handleFemale.bind(this)
    this.handleMale = this.handleMale.bind(this)
    this.handleGood = this.handleGood.bind(this)
    this.handleBad = this.handleBad.bind(this)
    this.handleDcComics = this.handleDcComics.bind(this)
    this.handleMarvelComics = this.handleMarvelComics.bind(this)
    this.handleHuman = this.handleHuman.bind(this)
    this.handleMale = this.handleMale.bind(this)
  }

  componentDidMount() {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(res => this.setState({ heroes: res.data }))
  }

  handleFemale() {
    const filter = _.filter(this.state.heroes, hero => {
      return hero.appearance.gender === 'Female'
    })
    this.setState({filteredHeroes: filter})
    this.applySort(filter)
  }

  handleMale() {
    const filter = _.filter(this.state.heroes, hero => {
      return hero.appearance.gender === 'Male'
    })
    this.setState({filteredHeroes: filter})
    this.applySort(filter)
  }

  handleGood() {
    const filter = _.filter(this.state.heroes, hero => {
      return hero.biography.alignment === 'good'
    })
    this.setState({filteredHeroes: filter})
    this.applySort(filter)
  }

  handleBad() {
    const filter = _.filter(this.state.heroes, hero => {
      return hero.biography.alignment === 'bad'
    })
    this.setState({filteredHeroes: filter})
    this.applySort(filter)
  }

  handleMarvelComics() {
    const filter = _.filter(this.state.heroes, hero => {
      return hero.biography.publisher === 'Marvel Comics'
    })
    this.setState({filteredHeroes: filter})
    this.applySort(filter)
  }

  handleDcComics() {
    const filter = _.filter(this.state.heroes, hero => {
      return hero.biography.publisher === 'DC Comics'
    })
    this.setState({filteredHeroes: filter})
    this.applySort(filter)
  }

  handleHuman() {
    const filter = _.filter(this.state.heroes, hero => {
      return hero.appearance.race === 'Human'
    })
    this.setState({filteredHeroes: filter})
    this.applySort(filter)
  }

  handleChange(e) {
    this.setState({ sortTerm: e.target.value })
  }

  handleKeyUp(e) {
    const re = new RegExp(e.target.value, 'i')
    const filter = _.filter(this.state.heroes, hero => {
      return re.test(hero.name)
    })
    this.setState({filteredHeroes: filter})
    this.applySort(filter)
  }

  applySort(filteredHeroes) {
    const [field, order] = this.state.sortTerm.split('|')
    const sortedHeroes = _.orderBy(filteredHeroes, [field], [order])
    return sortedHeroes
  }

  render() {
    if(!this.state.heroes) return <h2>Loading...</h2>
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
                    <option value="name|asc">Name, ascending</option>
                    <option value="name|desc">Name, descending</option>
                    <option value="powerstats.intelligence|desc">Intelligence, descending</option>
                    <option value="powerstats.intelligence|asc">Intelligence, ascending</option>
                    <option value="powerstats.strength|desc">Strength, descending</option>
                    <option value="powerstats.strength|asc">Strength, ascending</option>
                    <option value="powerstats.speed|desc">Speed, descending</option>
                    <option value="powerstats.speed|asc">Speed, ascending</option>
                    <option value="powerstats.durability|desc">Durability, descending</option>
                    <option value="powerstats.durability|asc">Durability, ascending</option>
                    <option value="powerstats.power|desc">Power, descending</option>
                    <option value="powerstats.power|asc">Power, ascending</option>
                    <option value="powerstats.combat|desc">Combat, descending</option>
                    <option value="powerstats.combat|asc">Combat, ascending</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button" value="appearance|gender|Male" onClick={this.handleMale}>Male
                  </button>
                  <button className="button" value="appearance|gender|Female" onClick={this.handleFemale}>Female
                  </button>
                  <button className="button" value="biography|alignment|good" onClick={this.handleGood}>Good
                  </button>
                  <button className="button" value="biography|alignment|bad" onClick={this.handleBad}>Bad
                  </button>
                  <button className="button" value="biography|publisher|Marvel Comics" onClick={this.handleMarvelComics}>Marvel Comics
                  </button>
                  <button className="button" value="biography|publisher|DC Comics" onClick={this.handleDcComics}>DC Comics
                  </button>
                  <button className="button" value="appearance|race|Human" onClick={this.handleHuman}>Human
                  </button>
                </div>
              </div>

            </div>
            <div className="column is-four-fifths">
              <div className="columns is-multiline">
                {this.applySort(this.state.filteredHeroes).map(hero =>
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
