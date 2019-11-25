import React from "react"
import "../index.css"
import Intrebare from "./Intrebare.js"
import Raspunsuri from "./Raspunsuri.js"
import Meniu from "./Meniu.js"
import Intrebari from "./Intrebari.js"

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
      raspunsCurent: 4
    }
  }
  render() {
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
  }

  getRaspunsCurent(_raspuns) {
    this.setState({
      raspunsCurent: _raspuns
    })

    if (_raspuns === 1 || _raspuns === 2) {
      for (let k in telefoane) {
        if (telefoaneRamase[k].categorie[1] === _raspuns)
          telefoane.push(telefoaneRamase[k])
      }
      telefoaneRamase = telefoane
    } else {
      this.schimbaIntrebarea()
    }

    this.schimbaIntrebarea()
  }

  schimbaIntrebarea() {
    if (this.state.i + 1 === nrIntrebari) {
      this.start()
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
}

export default Content
