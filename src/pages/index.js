import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteIntro from "../components/SiteIntro"
import Work from "../components/work/Work"

const IndexPage = () => (
  <Layout>
    <SEO title="Work" />
    <SiteIntro intro="My name is John Fry. I’m a Melbourne based frontend developer with a strong design background looking for creative projects to collaborate on." cta="Get in contact to discuss your project." />
    <main className="site-main">
      <PageTransition transitionTime={500}>
        <Work />
      </PageTransition>
    </main>
  </Layout>
)

export default IndexPage
