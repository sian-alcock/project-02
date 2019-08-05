import React from 'react'
import axios from 'axios'
import _ from 'lodash'

import GameCard from '../heroes/GameCard'

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
      },
      gameOn: false
    }
    this.getCharacters = this.getCharacters.bind(this)
    this.playGame = this.playGame.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  componentDidMount() {
    axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then(res => this.setState({ heroes: res.data, playerText: 'Press Play to get your superhero character', computerText: 'Choose your best stat', resultText: 'Will you win?  Will you lose? The fate of the universe is in your hands' }))

  }

  getCharacters() {
    const playerCharacter = _.sample(this.state.heroes)
    const computerCharacter = _.sample(this.state.heroes)
    this.setState({ playerCharacter, computerCharacter, gameOn: true, result: false })
  }

  playGame(e) {

    const powerStatInPlay = e.target.innerHTML.toLowerCase()
    const playerStat = this.state.playerCharacter.powerstats[powerStatInPlay]
    const playerText = `${this.state.playerCharacter.name} your ${powerStatInPlay} rating is ${playerStat}`
    const computerStat = this.state.computerCharacter.powerstats[powerStatInPlay]
    const computerText = `The ${powerStatInPlay} rating for ${this.state.computerCharacter.name} is ${computerStat}`

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
    this.setState({playerText, computerText, resultText, gameOn: true, result: true})
  }

  resetGame() {
    this.setState({playerText: 'Press Play to get your superhero character', computerText: 'Choose your best stat', resultText: 'Will you win?  Will you lose? The fate of the universe is in your hands', result: false })
    this.getCharacters()
  }

  render() {
    console.log(this.state)
    if(!this.state.heroes) return <h2>Loading...</h2>
    return(
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <button className={`button ${this.state.gameOn ? 'is-hidden' : ''}`} onClick={this.getCharacters}>Play</button>
              <button className={`button ${!this.state.gameOn ? 'is-hidden' : ''}`} onClick={this.resetGame}>Play Again</button>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-one-third-desktop">
              <GameCard
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
              <div className="tile is-ancestor">
                <div className="tile">
                  <div className="tile is-parent is-vertical">
                    <article className={`tile is-child is-vertical has-text-centered notification ${this.state.result ? 'pulse' : ''}`}>
                      <p id="playerPick">{this.state.playerText}</p>
                      <p id="computerPick">{this.state.computerText}</p>
                      <p id="result">{this.state.resultText}</p>
                    </article>
                    <article className="tile is-child is-vertical has-text-centered notification">
                      <h1>VS</h1>
                    </article>
                    <article className="tile is-child is-vertical notification">
                      <button className="button is-fullwidth" onClick={this.playGame}>Intelligence</button>
                      <button className="button is-fullwidth" onClick={this.playGame}>Strength</button>
                      <button className="button is-fullwidth" onClick={this.playGame}>Speed</button>
                      <button className="button is-fullwidth" onClick={this.playGame}>Durability</button>
                      <button className="button is-fullwidth" onClick={this.playGame}>Power</button>
                      <button className="button is-fullwidth" onClick={this.playGame}>Combat</button>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third-desktop">
              <GameCard
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
        </div>
      </section>
    )
  }
}

export default Game
