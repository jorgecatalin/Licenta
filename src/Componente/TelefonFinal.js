import React from "react"

class TelefonFinal extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div className="TelefonFinal">
        <div className="Intrebare">
          Telefonul cel mai potrivit pentru dumneavoastra este:
        </div>
        <div className="TelefonFinalNume">{this.props.date.descriere.nume}</div>
        <img src={this.props.date.descriere.poza} />
      </div>
    )
  }
}

export default TelefonFinal
