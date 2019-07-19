import React from "react"
import Link from "gatsby-link"
import PageTransition from 'gatsby-plugin-page-transitions'

const SiteIntro = ({ intro, cta }) => (
  <div className="site__intro">
    <PageTransition transitionTime={500}>
      <p>{intro}</p>
      <p className="site__intro-cta">
        <Link to="/contact/">{cta}</Link>
      </p>
    </PageTransition>
  </div>
)

export default SiteIntro
