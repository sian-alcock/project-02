import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      navbarOpen: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  // componentDidUpdate(prevProps) {
  //   if(prevProps.location.pathname !== this.props.location.pathname) {
  //     this.setState({ navbarOpen: false })
  //   }
  // }

  render() {
    return(
      <nav className="navbar is-fexed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link to ="/" className="navbar-item">🦹‍♀️</Link>

            <a
              role="button"
              className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`}
              onClick={this.toggleNavbar}
            >

              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : '' }`}>
            <div className="navbar-start">
              <Link to="/heroes" className="navbar-item">All Heroes</Link>
              <Link to="/groups" className="navbar-item">Groups</Link>
              <Link to="/play" className="navbar-item">Play Game</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
