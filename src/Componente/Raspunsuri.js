import React from "react"

class Raspunsuri extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="Raspunsuri">
        <div className="RaspunsuriDaNu">
          <div
            className="RaspunsuriDa"
            onClick={() => this.props.date.getRaspunsCurent(1)}
          >
            {this.props.date.intrebariText[0]}
          </div>
          <div
            className="RaspunsuriNu"
            onClick={() => this.props.date.getRaspunsCurent(2)}
          >
            {this.props.date.intrebariText[1]}
          </div>
        </div>
        <div
          className="RaspunsuriNuConteaza"
          onClick={() => this.props.date.getRaspunsCurent(3)}
        >
          NU CONTEAZA
        </div>
      </div>
    )
  }
}

export default Raspunsuri
