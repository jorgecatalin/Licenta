import React from "react"

class TelefoaneAfisaj extends React.Component {
  constructor(props) {
    super(props)
  }

  schimbaPoza = () => {
    console.log(
      this.props.date.item.descriere.poza,
      this.props.date.item.descriere.nume
    )
    this.props.date.changePoza(
      this.props.date.item.descriere.poza,
      this.props.date.item.descriere.nume
    )
    this.props.date.showPoza()
  }
  render() {
    return (
      <div className="telefonAfisaj" onClick={this.schimbaPoza}>
        <img src={this.props.date.item.descriere.poza}></img>
        <div>{this.props.date.item.descriere.nume}</div>
      </div>
    )
  }
}

export default TelefoaneAfisaj
