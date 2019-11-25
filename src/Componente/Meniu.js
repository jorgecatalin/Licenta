import React from "react"

class Meniu extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (this.props.date.i > 0 && this.props.date.arataFinal === 0) {
      return (
        <div>
          <div onClick={this.props.date.inapoi}>Inapoi</div>
          <div onClick={this.props.date.start}>Reseteaza</div>
          <div onClick={this.props.date.arataTelefonFinal}>Termina</div>
        </div>
      )
    } else {
      return (
        <div>
          <div onClick={this.props.date.start}>Reseteaza</div>
          <div onClick={this.props.date.arataTelefonFinal}>Termina</div>
        </div>
      )
    }
  }
}

export default Meniu
