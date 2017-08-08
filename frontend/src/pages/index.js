import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import GithubStars from '../components/GithubStars'
import { rhythm } from '../utils/typography'
import config from '../../../config.json'
import _ from 'lodash'

class BlogIndex extends React.Component {
  render() {
    const weekElements = []
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    config.weeks.forEach((week, index) => {
      const pageLinks = []
      week.pages.forEach((slug) => {
        const matchingPost = _.find(posts, (post) => { return post.node.fields.slug.includes(slug) })
        if (!matchingPost) {
          return
        }

        pageLinks.push(
          <li
            key={matchingPost.node.fields.slug}
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: 'none' }} to={matchingPost.node.fields.slug}>
              {matchingPost.node.frontmatter.title}
            </Link>
          </li>
        )
      })
      weekElements.push(
        <div>
          Week {index + 1}
          {pageLinks}
        </div>
      )
    })

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <GithubStars />
        <ul>
          {weekElements}
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