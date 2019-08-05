import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import _ from 'lodash'
import Select from 'react-select'

import IndexCard from './IndexCard'

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
    this.handleSelect = this.handleSelect.bind(this)
    this.handleFilters = this.handleFilters.bind(this)


  }

  componentDidMount() {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(res => {
        let groups = res.data.map(hero => {
          return hero.connections.groupAffiliation.split(', ')
            .map(group => {
              group = group.replace('Former', 'former')
                .replace('Incorporated', 'Inc.')
              const match = group.match(/[A-Z][a-zA-Z0-9 .-]+/)
              return match ? match[0].trim() : group
            })
        })
          .reduce((flattened, groupArray) => flattened.concat(groupArray), [])
          .filter(group => group.length < 50 && group !== '-')
          .sort()

        groups = Array.from(new Set(groups))

        const objectGroups =groups.map(group => ({value: group, label: group}))
        console.log(objectGroups)

        this.setState({ heroes: res.data, filteredHeroes: res.data, groups, objectGroups })
      })
  }


  handleFilters(e) {
    const [fieldOne, fieldTwo, value] = e.target.value.split('|')
    const filter = _.filter(this.state.heroes, hero => {
      return hero[fieldOne][fieldTwo] === value
    })

    this.setState({ searchTerm: '' }, () => this.applySort(filter))
  }

  handleSelect(e) {
    const filter = _.filter(this.state.heroes, hero => {
      return hero.connections.groupAffiliation.includes(e.value)
    })
    console.log('handleGroupFilter is being called')
    console.log(filter)
    this.setState({filteredHeroes: filter})
    console.log(this.filteredHeroes)
    this.applySort(filter)
  }

  handleChange(e) {
    this.setState({ sortTerm: e.target.value })
    this.applySort(this.state.filteredHeroes)
  }

  handleKeyUp(e) {
    this.setState({ searchTerm: e.target.value })
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
    this.setState({filteredHeroes: sortedHeroes})
  }

  render() {
    if(!this.state.heroes) return <h2>Loading...</h2>
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-fifth">

              <div className="field">
                <label className="label has-text-white" htmlFor="search">Search</label>
                <div className="control">
                  <input id="search" className="input" type="text" placeholder="search..." onChange={this.handleKeyUp} value={this.state.searchTerm} />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white" htmlFor="sortBy">Sort By</label>
                <div className="select">
                  <select id="sortBy" onChange={this.handleChange}>
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
                  <label className="label has-text-white" htmlFor="findGroup">Find Group</label>
                  <Select id="findGroup" onChange={this.handleSelect} options={this.state.objectGroups} />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-white" htmlFor="filterBy">Filters</label>
                <div className="control">
                  <button className="button is-fullwidth" value="appearance|gender|Male" onClick={this.handleFilters}>Male
                  </button>
                  <button className="button is-fullwidth" value="appearance|gender|Female" onClick={this.handleFilters}>Female
                  </button>
                  <button className="button is-fullwidth" value="biography|alignment|good" onClick={this.handleFilters}>Good
                  </button>
                  <button className="button is-fullwidth" value="biography|alignment|bad" onClick={this.handleFilters}>Bad
                  </button>
                  <button className="button is-fullwidth" value="biography|publisher|Marvel Comics" onClick={this.handleFilters}>Marvel Comics
                  </button>
                  <button className="button is-fullwidth" value="biography|publisher|DC Comics" onClick={this.handleFilters}>DC Comics
                  </button>
                  <button className="button is-fullwidth" value="appearance|race|Human" onClick={this.handleFilters}>Human
                  </button>
                </div>
              </div>

            </div>
            <div className="column is-four-fifths">
              <div className="columns is-multiline">
                {this.state.filteredHeroes.map(hero =>
                  <div
                    key={hero.id}
                    className="column is-one-third-desktop is-half-tablet"
                  >
                    <Link to={`/heroes/${hero.id}`}>
                      <IndexCard
                        name={hero.name}
                        image={hero.images.lg}
                        publisher={hero.biography.publisher}
                        alignment={_.startCase(hero.biography.alignment)}
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
