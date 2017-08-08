const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const parseFilepath = require("parse-filepath")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("./src/templates/blog-post.js")
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                isTableOfContents
                week
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          console.log(edge)
          if (edge.node.slug === '' || edge.node.slug === '/README/' || !edge.node.frontmatter.title) {
            console.log('true')
            deletePage({ path: edge.node.path })
          }
          createPage({
            path: edge.node.fields.slug,
            component: blogPost,
            context: {
              slug: edge.node.fields.slug,
            },
          })
        })
      })
    )
  })
}

// Create slugs for files.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField, deletePage } = boundActionCreators
  let slug
  if (
    node.internal.type === `MarkdownRemark` &&
    getNode(node.parent).internal.type === `File`
  ) {
    const fileNode = getNode(node.parent)
    const parsedFilePath = parseFilepath(fileNode.relativePath)
    // Add slugs for docs pages
    slug = `/${parsedFilePath.name}/`
    createNodeField({ node, name: `slug`, value: slug })
  }
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  config.node = {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
  config.module = {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}