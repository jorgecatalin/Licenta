import React from "react"

class ViewerPoza extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="ViewerPoza" onClick={this.props.date.inchide}>
        <div className="ContainerViewerPoza">
          <img src={this.props.date.img}></img>
          <div>{this.props.date.nume}</div>
        </div>
      </div>
    )
  }
}

export default ViewerPoza
