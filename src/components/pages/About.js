import React from 'react'
import IndexCard from '../heroes/IndexCard'
import michaelImage from '../../images/michael.jpg'
import sianImage from '../../images/sian.jpg'

const About = () => {
  return(
    <section className="section">
      <div className="container">
        <div className="box">
          <div className="content">
            <h2>About the Site</h2>
            <p>This site has been developed by Michael G. Laird and Sian Alcock as part of a learning module in General Assembly&lsquo;s Software Engineering Immersive Course using JavaScript and React. </p>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <h2>About Developers</h2>
            <div className="columns is-multiline">
              <div className="column is-one-quarter-desktop is-offset-one-quarter">
                <IndexCard
                  name="Michael G. Laird"
                  image={michaelImage}
                  link="https://github.com/MGL1994"
                />
              </div>
              <div className="column is-one-quarter-desktop is-offset-one-half">
                <IndexCard
                  name="Sian Alcock"
                  image={sianImage}
                  link="https://github.com/sian-alcock"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="content">
            <h2>Acknowledgements</h2>
            <p>This site consumes an API published by GitHub user &lsquo;akabab&lsquo;. [https://akabab.github.io/superhero-api/api/]</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
