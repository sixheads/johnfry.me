import React from "react"
import PropTypes from "prop-types"
import PageTransition from 'gatsby-plugin-page-transitions'

const Footer = ({data}) => {
  const {author, siteEmail} = data.site.siteMetadata;

  return (
    <footer className="site-footer" role="contentinfo">
      <PageTransition transitionTime={500}>
        <div className="footer-details">
          <p className="footer-details__copyright">
          &copy; {author}. All Rights Reserved {new Date().getFullYear()}.
          </p>
          <p className="footer-details__email">
            <a className="link--alt" href={`mailto:${siteEmail}`}>
              {siteEmail}
            </a>
          </p>
        </div>
      </PageTransition>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string,
  siteEmail: PropTypes.string,
}

export default Footer
