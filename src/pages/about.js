import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteIntro from "../components/SiteIntro"
import AboutMe from "../components/about/AboutMe"
import Skills from "../components/about/Skills"
import ExperienceShort from "../components/about/ExperienceShort"
import Education from "../components/about/Education"

const About = () => (
  <Layout>
    <SEO title="About" />
    <SiteIntro intro="I’m have a long history of doing all sorts of stuff. I specialise in WordPress development … blah blah blah." cta="Get in contact to discuss your project." />
    <main className="site-main">
      <PageTransition transitionTime={500}>
        <AboutMe />
        <Skills />
        <ExperienceShort />
        <Education />
      </PageTransition>
    </main>
  </Layout>
)

export default About
