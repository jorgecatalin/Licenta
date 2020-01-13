import React from "react"

class NotificareIntrebari extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div
        style={{ background: this.props.date.item.culoare }}
        className="notificare"
        onClick={() => this.props.date.inapoiX(this.props.date.item.i)}
      >
        <div>{this.props.date.item.text}</div>
      </div>
    )
  }
}

export default NotificareIntrebari
