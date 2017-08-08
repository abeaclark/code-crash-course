import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"
import NextPrevious from '../components/NextPrevious'

import { rhythm, scale } from "../utils/typography"

class PageTemplate extends React.Component {
  render() {
    console.log(this.props)
    const page = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <div>
        <Helmet title={`${page.frontmatter.title} | ${siteTitle}`} />
        <h1>
          {page.frontmatter.title}
        </h1>
        <NextPrevious />
        <p
          style={{
            ...scale(-1 / 5),
            display: "block",
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {page.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <NextPrevious />
      </div>
    )
  }
}

export default PageTemplate
                                                                   
export const pageQuery = graphql`
  query pageBySlug($slug: String!){
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
