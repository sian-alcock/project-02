import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
import HeroesIndex from './components/heroes/Index'
import HeroesShow from './components/heroes/Show'
import Game from './components/pages/Game'
import About from './components/pages/About'

import 'bulma'
import './style.scss'

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Navbar />

        <Switch>
          <Route path ="/heroes/:id" component={HeroesShow} />
          <Route path ="/heroes" component={HeroesIndex} />
          <Route path ="/play" component={Game} />
          <Route path ="/about" component={About} />
          <Route path ="/" component={Home} />
        </Switch>
      </HashRouter>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
