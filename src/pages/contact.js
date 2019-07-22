import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteIntro from "../components/SiteIntro"
import ContactMe from "../components/contact/ContactMe"
import AboutSite from "../components/contact/AboutSite"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <SiteIntro
      intro="I’d love to talk to you about your new project and how we can work together. So get in touch via the details below."
      cta={null}
    />
    <main className="site-main">
      <ContactMe />
      <AboutSite />
    </main>
  </Layout>
)

export default Contact
