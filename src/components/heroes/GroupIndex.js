
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Select from 'react-select'






class GroupIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      heroes: [],
      options: [],
      groups: []
    }
    this.handleSelect = this.handleSelect.bind(this)
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

        const options = [
          {value: 'chocolate', label: 'x'},
          {value: 'strawberry', label: 'x'},
          {value: 'Vanilla', label: 'x'}
        ]

        this.setState({ heroes: res.data, groups, objectGroups })
      })
  }



  handleSelect(e) {
    console.log(e.value)
  }

  render() {
    if(!this.state.heroes) return <h2>Loading...</h2>


    console.log(this.state.groups)
    return(
      <section className="section">
        <div className="container">
          <Select onChange={this.handleSelect} options={this.state.objectGroups} />
          <div className="columns is-multiline">
            {this.state.groups.map((group, index) =>
              <div
                key={index}
                className="column is-one-quarter-desktop"
              >
                <Link to={`/heroes?${group}`}>
                  <div className="card">
                    <div className="card-content">
                      <p className="title">Header</p>
                      <div className="content">
                        {group}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default GroupIndex
