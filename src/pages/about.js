import React from "react"

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
    <SiteIntro intro="I’m have a long history of doing all sorts of stuff. I specialise in WordPress development … blah blah blah." />
    <main className="site-main">
      <AboutMe />
      <Skills />
      <ExperienceShort />
      <Education />
    </main>
  </Layout>
)

export default About
