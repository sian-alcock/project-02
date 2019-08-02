import React from 'react'
import IndexCard from '../heroes/IndexCard'

const About = () => {
  return(
    <section className="section">
      <div className="container">
        <div className="box">
          <div className="content">
            <h2>About the Site</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <h2>About Developers</h2>
            <div className="columns is-multiline">
              <div className="column is-one-quarter-desktop is-offset-one-quarter">
                <IndexCard
                  name="Michael G. Laird"
                  image="../../images/Michael-3.jpg"
                  link="https://github.com/MGL1994"
                />
              </div>
              <div className="column is-one-quarter-desktop is-offset-one-half">
                <IndexCard
                  name="Sian Alcock"
                  image="../../images/sian-5.jpg"
                  link="https://github.com/sian-alcock"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <h2>Acknowledgements</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
