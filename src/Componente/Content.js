import React from "react"
import "../index.css"
import Intrebare from "./Intrebare.js"
import Raspunsuri from "./Raspunsuri.js"
import Meniu from "./Meniu.js"
import Intrebari from "./Intrebari.js"
import TelefonFinal from "./TelefonFinal.js"

let data = require("./BazaDate.json")
let dataIntrebari = require("./BazaDateIntrebari.json")
let telefoane = []
let telefoaneRamase = data
//console.log(date[1])

let intrebari = []
for (const i in dataIntrebari) {
  intrebari.push(
    new Intrebari(
      dataIntrebari[i].textIntrebare,
      dataIntrebari[i].raspunsIntrebare,
      dataIntrebari[i].raspunsConditie,
      dataIntrebari[i].categorie
    )
  )
}
const nrIntrebari = intrebari.length
console.log(nrIntrebari)

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.getRaspunsCurent = this.getRaspunsCurent.bind(this)
    this.schimbaIntrebarea = this.schimbaIntrebarea.bind(this)
    this.start = this.start.bind(this)
    this.state = {
      i: 0,
      raspunsCurent: 4,
      arataFinal: 0
    }
  }
  render() {
    if (this.state.arataFinal === 0) {
      return (
        <div className="Content">
          <Intrebare text={intrebari[this.state.i].text} />
          <Raspunsuri
            date={{
              intrebariText: intrebari[this.state.i].raspunsuriText,
              raspunsuri: intrebari[this.state.i].raspunsuri,
              getRaspunsCurent: this.getRaspunsCurent
            }}
          />
          <Meniu />
        </div>
      )
    } else {
      return (
        <div className="Content">
          <TelefonFinal date={telefoaneRamase[0]} />
          <Meniu />
        </div>
      )
    }
  }

  getRaspunsCurent(_raspuns) {
    this.setState({
      raspunsCurent: _raspuns
    })
    if (_raspuns === 1 || _raspuns === 2) {
      for (let k in telefoaneRamase) {
        let ceva = telefoaneRamase[k][intrebari[this.state.i].categorie][1]
        if (ceva === _raspuns) {
          telefoane.push(telefoaneRamase[k])
          console.log(_raspuns, ceva)
        }
      }
      console.log(telefoaneRamase.length)
      telefoaneRamase = telefoane
      telefoane = []
    }
    this.schimbaIntrebarea()
  }

  schimbaIntrebarea() {
    if (this.state.i + 1 === nrIntrebari) {
      this.setState({
        arataFinal: 1
      })
    } else
      this.setState({
        i: this.state.i + 1
      })
  }

  start() {
    this.setState({
      i: 0
    })
    telefoane = []
    telefoaneRamase = data
  }

  arataTelefonFinal() {}
}

export default Content
