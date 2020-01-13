import React from "react"

class Meniu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    //trebuie ca macar o obtiune sa fie aleasa pentru a arata butonul Termina

    return (
      <div className="MeniuContainer">
        {this.props.date.i != 0 ? (
          <div onClick={this.props.date.inapoi}>
            <img src={require("../MeniuIcons/inapoi.png")}></img>
          </div>
        ) : (
          ""
        )}

        {this.props.date.arataFinal === 0 ? (
          <div onClick={() => this.props.date.getRaspunsCurent(3)}>
            <img src={require("../MeniuIcons/inainte.png")}></img>
          </div>
        ) : (
          ""
        )}

        <div onClick={this.props.date.start}>
          <img src={require("../MeniuIcons/reseteaza.png")}></img>
        </div>

        {this.props.date.i > 0 && this.props.date.arataFinal === 0 ? (
          <div onClick={this.props.date.arataTelefonFinal}>
            <img src={require("../MeniuIcons/termina.png")}></img>
          </div>
        ) : (
          ""
        )}
      </div>
    )
  }
}

export default Meniu
