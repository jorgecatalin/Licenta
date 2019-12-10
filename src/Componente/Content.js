import React from "react"
import Intrebare from "./Intrebare.js"
import Raspunsuri from "./Raspunsuri.js"
import Meniu from "./Meniu.js"
import Intrebari from "./Intrebari.js"
import TelefonFinal from "./TelefonFinal.js"
import { useSpring, animated } from "react-spring"
import { thisTypeAnnotation } from "@babel/types"

const data = require("./BazaDDate.json")
const dataIntrebari = require("./BazaIntrebari.json")
let telefoane = []
let telefoaneRamase = [...data]
let telefoaneInapoi = []
//console.log(date[1])

const intrebari = dataIntrebari

let intrebariPuse = [],
  intrebariRamase = [],
  intrebariCareNuMergPuse = []
intrebariRamase = [...intrebari]
intrebariRamase.shift()
intrebariPuse.push(intrebari[0])

const nrIntrebari = intrebari.length

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.getRaspunsCurent = this.getRaspunsCurent.bind(this)
    this.schimbaIntrebarea = this.schimbaIntrebarea.bind(this)
    this.start = this.start.bind(this)
    this.inapoi = this.inapoi.bind(this)
    this.arataTelefonFinal = this.arataTelefonFinal.bind(this)
    this.state = {
      i: 0,
      raspunsCurent: 4,
      arataFinal: 0
    }
  }
  render() {
    if (this.state.arataFinal === 0) {
      return (
        <div className="Content" from={{ opacity: 0 }} to={{ opacity: 1 }}>
          <Intrebare text={intrebariPuse[this.state.i].textIntrebare} />
          <Raspunsuri
            date={{
              intrebariText: intrebariPuse[this.state.i].raspunsIntrebare,
              raspunsuri: intrebariPuse[this.state.i].raspunsConditie,
              getRaspunsCurent: this.getRaspunsCurent
            }}
          />
          <Meniu
            date={{
              arataTelefonFinal: this.arataTelefonFinal,
              start: this.start,
              inapoi: this.inapoi,
              i: this.state.i,
              arataFinal: this.state.arataFinal,
              getRaspunsCurent: this.getRaspunsCurent
            }}
          />
        </div>
      )
    } else {
      return (
        <div className="Content">
          <TelefonFinal date={telefoaneRamase[0]} />
          <Meniu
            date={{
              arataTelefonFinal: this.arataTelefonFinal,
              start: this.start,
              inapoi: this.inapoi,
              i: this.state.i,
              arataFinal: this.state.arataFinal
            }}
          />
        </div>
      )
    }
  }
  sePoatePuneIntrebare(intrebareCurenta) {
    let raspA = 0,
      raspB = 0
    for (let x in telefoaneRamase) {
      if (telefoaneRamase[x][intrebareCurenta.categorie] === 1) raspA += 1
      else raspB += 1
    }
    return [raspA, raspB]
  }

  getRaspunsCurent(_raspuns) {
    this.props.action()
    this.setState({
      raspunsCurent: _raspuns
    })
    telefoaneInapoi[this.state.i] = telefoaneRamase
    if (_raspuns === 1 || _raspuns === 2) {
      for (let k in telefoaneRamase) {
        let ceva = telefoaneRamase[k][intrebariPuse[this.state.i].categorie]
        console.log("CCEVAAAA :::::;", ceva)
        if (ceva == _raspuns) {
          telefoane.push(telefoaneRamase[k])
          //console.log(_raspuns, ceva)
        }
      }
      if (telefoaneRamase.length == 0) console.log(telefoaneRamase)
      console.log("Numarul telefoanelor ramase", telefoaneRamase.length)

      telefoaneRamase = telefoane
      telefoane = []
    }
    this.schimbaIntrebarea()
  }

  schimbaIntrebarea() {
    //let XX = this.sePoatePuneIntrebare(intrebari[this.state.i])
    //console.log("Se poate pune Intrebare: ", XX[1], XX[0])
    this.props.action()

    let medie = 99999,
      medieNoua,
      intrebareaUrmatoare = null,
      x

    if (intrebariRamase.length === 0) {
      this.setState({
        arataFinal: 1
      })
    } else {
      if (intrebariRamase.length > 0)
        for (let k in intrebariRamase) {
          let ceva = this.sePoatePuneIntrebare(intrebariRamase[k])
          if (ceva[0] === 0 || ceva[1] === 0) {
            intrebariCareNuMergPuse.push(intrebariRamase[k])
            intrebariRamase.splice(k, 1)
            k--
          } else {
            if (ceva[0] >= ceva[1]) {
              medieNoua = ceva[0] - ceva[1]
            } else {
              medieNoua = ceva[1] - ceva[0]
            }
            if (medieNoua <= medie) {
              intrebareaUrmatoare = intrebariRamase[k]
              medie = medieNoua
              x = k
            }
          }
        }
      if (intrebareaUrmatoare !== null) {
        intrebariPuse.push(intrebareaUrmatoare)
        intrebariRamase.splice(x, 1)
      } else {
        this.setState({
          arataFinal: 1
        })
      }
    }

    this.setState({
      i: this.state.i + 1
    })
  }

  start() {
    this.props.action()
    this.setState({
      i: 0,
      arataFinal: 0
    })
    telefoane = []
    telefoaneRamase = data
    intrebariPuse = []
    intrebariPuse.push(intrebari[0])
    intrebariRamase = [...intrebari]
    intrebariRamase.shift()
    intrebariCareNuMergPuse = []
    console.log("Numarul de intrebari", intrebari.length)
  }

  arataTelefonFinal() {
    this.props.action()
    this.setState({
      arataFinal: 1,
      i: this.state.i + 1
    })
  }

  inapoi() {
    this.props.action()

    intrebariRamase.concat(intrebariCareNuMergPuse)

    console.log("i return: ", this.state.i)
    console.log("Nr intrebari return: ", intrebariPuse.length)
    console.log("intrebarile Puse", intrebariPuse)
    if (this.state.arataFinal === 1) {
      telefoaneRamase = telefoaneInapoi[this.state.i - 1]
      console.log("ccccccccccccccccccc")
    } else {
      telefoaneRamase = telefoaneInapoi[this.state.i - 1]
      intrebariRamase.push(intrebariPuse[this.state.i])
      intrebariPuse.pop()
    }

    console.log("i return: ", this.state.i)
    console.log("Nr intrebari return: ", intrebariPuse.length)
    console.log("intrebarile Puse", intrebariPuse)

    this.setState({
      i: this.state.i - 1,
      arataFinal: 0
    })
  }
}

export default Content
