import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteIntro from "../components/SiteIntro"
import ContactMe from "../components/contact/ContactMe"
import AboutSite from "../components/contact/AboutSite"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <SiteIntro intro="I’d love to talk to you about your new project and how we can work together … blah blah blah." cta={null} />
    <main className="site-main">
      <PageTransition transitionTime={500}>
        <ContactMe />
        <AboutSite />
      </PageTransition>
    </main>
  </Layout>
)

export default Contact
