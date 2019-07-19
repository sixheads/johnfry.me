import React from 'react'

const AboutSite = () => (
  <section id="about-site" className="about-site wrapper">
    <h2 className="title">About johnfry.me</h2>
    <div className="wrapper--content">
      <p>
        This site is build using{' '}
        <a className="link--alt" href="https://reactjs.org/">
          React
        </a>{' '}
        on top of the excellent static site generator{' '}
        <a className="link--alt" href="https://www.gatsbyjs.org/">
          Gatsby
        </a>.
      </p>
    </div>
  </section>
)

export default AboutSite