import React from 'react'
import Link from 'gatsby-link'

const AboutMe = () => (
  <section id="about" className="about">
    <h2 className="title">About Me</h2>
    <div className="wrapper--content">
      <p>
        As I mentioned above I'm a frontend developer, with a particular focus
        on custom WordPress development. I run a small design and development
        studio called <a href="https://www.sixheads.com">Sixheads</a> with my
        partner Bec.
      </p>
      <p>
        I also work directly with a number of designers and agencies looking for
        a development partner to work with on projects. With my graphic design
        background I bring a keen visual sense to the table as well.
      </p>
      <p>
        <Link to="/resume/">To see an extended resume head here.</Link>
      </p>
    </div>
  </section>
)

export default AboutMe
