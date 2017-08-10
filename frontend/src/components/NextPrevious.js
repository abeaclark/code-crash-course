import React from "react"
import axios from 'axios'
import _ from 'lodash'
import config from '../../../config.json'
import Link from 'gatsby-link'

const flattenPages = () => {
  let flatPages = []
  config.weeks.forEach(week => {
    flatPages = flatPages.concat(week.pages)
  })
  console.log(flatPages)
  return flatPages
}

const NextPrevious = ({ slug }) => {
  const trimmedSlug = _.trim(slug, '/')
  const flatPages = flattenPages()
  const getNextSlug = () => {
    const index = flatPages.indexOf(trimmedSlug)
    console.log(index)
    console.log(trimmedSlug)
    const nextIndex = index + 1
    if (nextIndex >= flatPages.length || nextIndex == 0) {
      return null
    }
    return flatPages[nextIndex]
  }

  const getPreviousSlug = () => {
    const index = flatPages.indexOf(trimmedSlug)
    const previousIndex = index - 1
    if (previousIndex < 0) {
      return null
    }
    return flatPages[previousIndex]
  }

  const previousSlug = getPreviousSlug()
  const nextSlug = getNextSlug()

  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
      }}
    >
      { previousSlug ?
        (
          <Link to={'/' + previousSlug}>
            {"<"} {previousSlug}
          </Link>
        ) :
        <div /> 
      }
      { nextSlug ?
        (
          <Link to={'/' + nextSlug}>
            {nextSlug} {">"}
          </Link>
        ) :
        <div />
      }
    </div>
  )
}

export default NextPrevious
