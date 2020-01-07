import React from "react"

class TelefoaneAfisaj extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="telefonAfisaj">
        <img src={this.props.date.descriere.poza}></img>
        <div>{this.props.date.descriere.nume}</div>
      </div>
    )
  }
}

export default TelefoaneAfisaj
