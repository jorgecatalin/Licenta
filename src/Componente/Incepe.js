import React from "react"
import "../index.css"

class Incepe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="Incepe">
        <div onClick={this.props.action}>Incepe</div>
      </div>
    )
  }
}

export default Incepe
