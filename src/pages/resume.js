import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteIntro from "../components/SiteIntro"
import Experience from "../components/about/Experience"
import Education from "../components/about/Education"
import Skills from "../components/about/Skills"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <SiteIntro
      intro="I've had a broad range of experience in my career which I feel brings a lot to the table."
      cta="Get in contact for a chat."
    />
    <main className="site-main">
      <Experience />
      <Education />
      <Skills />
    </main>
  </Layout>
)

export default Resume
