import React from "react"
import axios from 'axios'

class NextPrevious extends React.Component {
  constructor() {
    super()
  }

  next() {

  }

  previous() {

  }

  render() {
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
        <a>
          {"<"} Build command-line programs
        </a>
        <a>
          Design basics {">"}
        </a>
      </div>
    )
  }
}

export default NextPrevious
