import React from 'react'
import axios from 'axios'
import _ from 'lodash'

import Card from '../heroes/Card'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      playerCharacter: {
        images: {},
        powerstats: {}
      },
      computerCharacter: {
        images: {},
        powerstats: {}
      }
    }
    this.getCharacters = this.getCharacters.bind(this)
    this.playGame = this.playGame.bind(this)
  }

  componentDidMount() {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(res => this.setState({ heroes: res.data}))

  }

  getCharacters() {
    const playerCharacter = _.sample(this.state.heroes)
    const computerCharacter = _.sample(this.state.heroes)
    console.log(playerCharacter)
    this.setState({ playerCharacter, computerCharacter })
  }

  playGame(e) {
    const powerStatInPlay = e.target.innerHTML.toLowerCase()
    const playerStat = this.state.playerCharacter.powerstats[powerStatInPlay]
    const playerText = `${this.state.playerCharacter.name} your ${powerStatInPlay} rating is ${playerStat}`
    const computerStat = this.state.computerCharacter.powerstats[powerStatInPlay]
    const computerText = `${this.state.computerCharacter.name} your ${powerStatInPlay} rating is ${computerStat}`

    const intelligenceWinString = 'Winner! You are the brightest spark!'
    const intelligenceLoseString = 'Loser! Your light has been extinguished!'
    const strengthWinString = 'Winner! You are the strongest and will rule the universe!'
    const strengthLoseString = 'Loser! You are weak and have been crushed!'
    const speedWinString = 'Winner! You are faster than lightning!'
    const speedLoseString = 'Loser! You are so slow you are going backwards!'
    const durabilityWinString = 'Winner! You will last for an eternity!'
    const durabilityLoseString = 'Loser! I blinked and you were down!'
    const powerWinString = 'Winner! Your power is boundless!'
    const powerLoseString = 'Loser! You couldn\'t power a lightbulb!'
    const combatWinString = 'Winner! No one can beat you in the field!'
    const combatLoseString = 'Loser! Death becomes you!'
    let resultText = ''

    if(playerStat > computerStat && powerStatInPlay === 'intelligence') {
      resultText = intelligenceWinString
    } else if(playerStat < computerStat && powerStatInPlay === 'intelligence') {
      resultText = intelligenceLoseString
    } else if(playerStat > computerStat && powerStatInPlay === 'strength') {
      resultText = strengthWinString
    } else if(playerStat < computerStat && powerStatInPlay === 'strength') {
      resultText = strengthLoseString
    } else if(playerStat > computerStat && powerStatInPlay === 'speed') {
      resultText = speedWinString
    } else if(playerStat < computerStat && powerStatInPlay === 'speed') {
      resultText = speedLoseString
    } else if(playerStat > computerStat && powerStatInPlay === 'durability') {
      resultText = durabilityWinString
    } else if(playerStat < computerStat && powerStatInPlay === 'durability') {
      resultText = durabilityLoseString
    } else if(playerStat > computerStat && powerStatInPlay === 'power') {
      resultText = powerWinString
    } else if(playerStat < computerStat && powerStatInPlay === 'power') {
      resultText = powerLoseString
    } else if(playerStat > computerStat && powerStatInPlay === 'combat') {
      resultText = combatWinString
    } else if(playerStat < computerStat && powerStatInPlay === 'combat') {
      resultText = combatLoseString
    } else {
      resultText = 'It\'s a tie'
    }
    this.setState({playerText, computerText, resultText})
    //Disable all buttons
    //Get the button value: eg. Intelligence
    //Get value for intelligence from player and computerCharacter
    //Compare values
    //Report result
  }

  render() {
    if(!this.state.heroes) return <h2>Loading...</h2>
    return(
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <button className="button" onClick={this.getCharacters}>Start</button>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-one-third-desktop">
              <Card
                name={this.state.playerCharacter.name}
                image={this.state.playerCharacter.images.lg}
                intelligence={this.state.playerCharacter.powerstats.intelligence}
                strength={this.state.playerCharacter.powerstats.strength}
                speed={this.state.playerCharacter.powerstats.speed}
                durability={this.state.playerCharacter.powerstats.durability}
                power={this.state.playerCharacter.powerstats.power}
                combat={this.state.playerCharacter.powerstats.combat}
              />
            </div>
            <div className="column is-one-third-desktop">
              <p id="playerPick">{this.state.playerText}</p>
              <p id="computerPick">{this.state.computerText}</p>
              <p id="result">{this.state.resultText}</p>
            </div>
            <div className="column is-one-third-desktop">
              <Card
                name={this.state.computerCharacter.name}
                image={this.state.computerCharacter.images.lg}
                intelligence='?'
                strength='?'
                speed='?'
                durability='?'
                power='?'
                combat='?'
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <button className="button" onClick={this.playGame}>Intelligence</button>
              <button className="button" onClick={this.playGame}>Strength</button>
              <button className="button" onClick={this.playGame}>Speed</button>
              <button className="button" onClick={this.playGame}>Durability</button>
              <button className="button" onClick={this.playGame}>Power</button>
              <button className="button" onClick={this.playGame}>Combat</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Game
