import React from "react"
import axios from 'axios'

class GithubStars extends React.Component {
  constructor() {
    super()
    this.state = {
      starCount: null,
    }
  }

  componentWillMount(){
    axios.get(`https://api.github.com/repos/abeaclark/code-crash-course`)
    .then( (res) => {
      this.setState({ starCount: res.data.stargazers_count })
    })
  }

  render() {
    return (
      <a href="https://github.com/abeaclark/code-crash-course">
        {this.state.starCount} Star{this.state.starCount > 1 ? 's' : null}
      </a>
    )
  }
}

export default GithubStars
