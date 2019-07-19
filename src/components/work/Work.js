import React from "react"
import { StaticQuery, graphql } from "gatsby"
import WorkItem from "./Workitem"

const Work = () => (
  <StaticQuery
    query={graphql`
      query WorkQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
                design
                designLink
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 650) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section id="work" className="work">
        <h2 className="title">Work</h2>
        <div className="work__grid wrapper--content">
          {data.allMarkdownRemark.edges.map(edge => (
            <WorkItem key={edge.node.frontmatter.title} work={edge} />
          ))}
        </div>
      </section>
    )}
  />
)

export default Work
