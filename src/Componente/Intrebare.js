import React from "react"

class Intrebare extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      //<div class="IntrebareContainer">
      // <div class="ContentStangaHeader">Intrebare</div>
      <div className="Intrebare">{this.props.text}</div>
      // </div>
    )
  }
}

export default Intrebare
