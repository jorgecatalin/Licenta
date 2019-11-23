import React from "react"
import "../index.css"

class Intrebare extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className="Intrebare">{this.props.text}</div>
  }
}

export default Intrebare
