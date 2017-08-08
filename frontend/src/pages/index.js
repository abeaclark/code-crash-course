import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import GithubStars from '../components/GithubStars'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    posts.forEach(post => {
      console.log(post)
      if (post.node.fields.slug !== '/404/' && post.node.frontmatter.title !== '' && !post.node.frontmatter.isTableOfContents) {
        const title = get(post, 'node.frontmatter.title') || post.node.path
        pageLinks.push(
          <li
            key={post.node.fields.slug}
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: 'none' }} to={post.node.fields.slug}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        )
      }
    })

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <GithubStars />
        <ul>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            week
            isTableOfContents
          }
        }
      }
    }
  }
`