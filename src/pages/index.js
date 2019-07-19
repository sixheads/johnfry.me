import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteIntro from "../components/SiteIntro"
import Work from "../components/work/Work"

const IndexPage = () => (
  <Layout>
    <SEO title="Work" />
    <SiteIntro intro="My name is John Fry. I’m a Melbourne based frontend developer with a strong design background looking for creative projects to collaborate on." />
    <main className="site-main">
      <Work />
    </main>
  </Layout>
)

export default IndexPage
