import React from "react"

class NotificareIntrebari extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div
        style={{ background: this.props.date.culoare }}
        className="notificare"
      >
        <div>{this.props.date.text}</div>
      </div>
    )
  }
}

export default NotificareIntrebari
