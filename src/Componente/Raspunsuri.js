import React from "react"

class Raspunsuri extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Raspunsuri">
        <div onClick={() => this.props.date.getRaspunsCurent(1)}>
          {this.props.date.intrebariText[0]}
        </div>
        <div onClick={() => this.props.date.getRaspunsCurent(2)}>
          {this.props.date.intrebariText[1]}
        </div>
        <div onClick={() => this.props.date.getRaspunsCurent(3)}>
          Nu conteaza
        </div>
      </div>
    )
  }
}

export default Raspunsuri
