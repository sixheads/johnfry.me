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
      intro="Something about a broad range of experience … blah blah blah."
      cta="Get in contact to discuss your project."
    />
    <main className="site-main">
      <Experience />
      <Education />
      <Skills />
    </main>
  </Layout>
)

export default Resume
