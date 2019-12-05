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
          <div onClick={this.props.date.inapoi}>Inapoi</div>
        ) : (
          ""
        )}

        {this.props.date.arataFinal === 0 ? (
          <div onClick={() => this.props.date.getRaspunsCurent(3)}>
            Nu conteaza
          </div>
        ) : (
          ""
        )}

        <div onClick={this.props.date.start}>Reseteaza</div>

        {this.props.date.i > 0 && this.props.date.arataFinal === 0 ? (
          <div onClick={this.props.date.arataTelefonFinal}>Termina</div>
        ) : (
          ""
        )}
      </div>
    )
  }
}

export default Meniu
