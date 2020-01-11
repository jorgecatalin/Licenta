import React from "react"

class TelefonFinal extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div className="TelefonFinal">
        <div className="TextFinal">
          <div className="TelefonFinalNume">
            Telefonul cel mai potrivit pentru dumneavoastra este:<br></br>
            {this.props.date.descriere.nume}
          </div>
          <img src={this.props.date.descriere.poza} />
        </div>
      </div>
    )
  }
}

export default TelefonFinal
