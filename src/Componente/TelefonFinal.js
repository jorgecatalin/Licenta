import React from "react"

class TelefonFinal extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div>
        <div>Telefonul cel mai potrivit pentru dumneavoastra este:</div>
        <div>{this.props.date.nume}</div>
        <div>{this.props.date.sistemOperare[0]}</div>
        <div>{this.props.date.memorieStocare[0]}</div>
        <div>{this.props.date.valoare[0]}</div>
      </div>
    )
  }
}

export default TelefonFinal
