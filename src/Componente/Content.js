import React from "react"
import Intrebare from "./Intrebare.js"
import Raspunsuri from "./Raspunsuri.js"
import Meniu from "./Meniu.js"
import Intrebari from "./Intrebari.js"
import TelefonFinal from "./TelefonFinal.js"
import TelefoaneAfisaj from "./TelefoaneAfisaj.js"
import NotificareIntrebari from "./NotificareIntrebari.js"
import ViewerPoza from "./ViewerPoza.js"
import { useSpring, animated } from "react-spring"
import { thisTypeAnnotation } from "@babel/types"

const data = require("./BazaDDate.json")
const dataIntrebari = require("./BazaIntrebari.json")
let telefoane = []
let telefoaneRamase = [...data]
let telefoaneInapoi = []
//console.log(date[1])

const intrebari = [...dataIntrebari]

let intrebariPuse = [],
  intrebariRamase = [],
  intrebariCareNuMergPuse = []
intrebariRamase = [...intrebari]
intrebariRamase.shift()
intrebariPuse.push(intrebari[0])

const nrIntrebari = intrebari.length

let notificareIntrebare = []

let viewPoza = {
  img: "",
  nume: ""
}

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.getRaspunsCurent = this.getRaspunsCurent.bind(this)
    this.schimbaIntrebarea = this.schimbaIntrebarea.bind(this)
    this.start = this.start.bind(this)
    this.inapoi = this.inapoi.bind(this)
    this.arataTelefonFinal = this.arataTelefonFinal.bind(this)
    this.showPoza = this.showPoza.bind(this)
    this.changePoza = this.changePoza.bind(this)
    this.inapoiX = this.inapoiX.bind(this)
    this.state = {
      i: 0,
      raspunsCurent: 4,
      arataFinal: 0,
      telefoaneRamaseState: [...telefoaneRamase],
      notificariIntrebare: [],
      showPoza: 0
    }
  }

  componentDidMount() {
    let w = window.innerWidth
    document.getElementById("Content").scrollIntoView()
    console.log("a MONTAT", w)
  }
  render() {
    if (this.state.arataFinal === 0) {
      return (
        <div class="ContainerTot">
          {this.state.showPoza ? (
            <ViewerPoza
              date={{
                img: viewPoza.img,
                nume: viewPoza.nume,
                inchide: this.showPoza
              }}
            ></ViewerPoza>
          ) : (
            ""
          )}
          <div class="ContainerContent" id="ContainerContent">
            <div class="ContentStanga" id="ContentStanga">
              <div class="ContentStangaFixed">
                <div class="ContentStangaHeader">Istoric intrebari</div>
                <div class="ContentStangaLista">
                  {this.state.notificariIntrebare.map(item => (
                    <NotificareIntrebari
                      date={{ item: item, inapoiX: this.inapoiX }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="Content" id="Content">
              <Intrebare text={intrebariPuse[this.state.i].textIntrebare} />
              <Raspunsuri
                date={{
                  intrebariText: intrebariPuse[this.state.i].raspunsIntrebare,
                  raspunsuri: intrebariPuse[this.state.i].raspunsConditie,
                  getRaspunsCurent: this.getRaspunsCurent
                }}
              />
            </div>
            <div class="ContentDreapta" id="ContentDreapta">
              <div class="ContentDreaptaFixed">
                <div class="ContentStangaHeader">Telefoane posibile</div>
                <div class="ContentDreaptaLista">
                  {this.state.telefoaneRamaseState.map(item => (
                    <TelefoaneAfisaj
                      date={{
                        item: item,
                        changePoza: this.changePoza,
                        showPoza: this.showPoza
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
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
        <div class="ContainerTot">
          <div class="ContainerContent">
            <div className="TelefonFInal">
              <TelefonFinal date={telefoaneRamase[0]} />
            </div>
          </div>{" "}
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

  changePoza(img, nume) {
    console.log("CHANGE POZA", img, nume)
    viewPoza.img = img
    viewPoza.nume = nume
  }
  showPoza() {
    if (this.state.showPoza)
      this.setState({
        showPoza: 0
      })
    else
      this.setState({
        showPoza: 1
      })
  }
  executaFunctii() {
    this.setState({
      telefoaneRamaseState: [...telefoaneRamase]
    })
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
    this.setState({
      raspunsCurent: _raspuns
    })
    telefoaneInapoi[this.state.i] = [...telefoaneRamase]
    if (_raspuns === 1 || _raspuns === 2) {
      for (let k in telefoaneRamase) {
        let ceva = telefoaneRamase[k][intrebariPuse[this.state.i].categorie]
        if (ceva == _raspuns) {
          telefoane.push(telefoaneRamase[k])
          //console.log(_raspuns, ceva)
        }
      }
      if (telefoaneRamase.length == 0) console.log(telefoaneRamase)
      console.log("Numarul telefoanelor ramase", telefoaneRamase.length)

      telefoaneRamase = [...telefoane]
      telefoane = []
      this.executaFunctii()
    }

    //adaug notificari
    if (_raspuns === 1)
      notificareIntrebare.push({
        text: intrebariPuse[this.state.i].textIntrebare,
        culoare: "rgb(130, 243, 0)",
        i: this.state.i
      })
    else if (_raspuns === 2)
      notificareIntrebare.push({
        text: intrebariPuse[this.state.i].textIntrebare,
        culoare: "#f70002",
        i: this.state.i
      })
    else
      notificareIntrebare.push({
        text: intrebariPuse[this.state.i].textIntrebare,
        culoare: "gray",
        i: this.state.i
      })
    this.setState({
      notificariIntrebare: [...notificareIntrebare]
    })
    this.schimbaIntrebarea()
  }

  schimbaIntrebarea() {
    //let XX = this.sePoatePuneIntrebare(intrebari[this.state.i])
    //console.log("Se poate pune Intrebare: ", XX[1], XX[0])

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
    this.setState({
      i: 0,
      arataFinal: 0
    })
    telefoane = []
    telefoaneRamase = [...data]
    intrebariPuse = []
    intrebariPuse.push(intrebari[0])
    intrebariRamase = [...intrebari]
    intrebariRamase.shift()
    intrebariCareNuMergPuse = []
    this.executaFunctii()
    //sterg notificari
    notificareIntrebare = []
    this.setState({
      notificariIntrebare: [...notificareIntrebare]
    })
    console.log("Numarul de intrebari", intrebari.length)
  }

  arataTelefonFinal() {
    this.executaFunctii()
    this.setState({
      arataFinal: 1,
      i: this.state.i + 1
    })

    notificareIntrebare.push({
      text: intrebariPuse[this.state.i].textIntrebare,
      culoare: "gray"
    })
    console.log(intrebariCareNuMergPuse)
  }

  inapoi() {
    intrebariRamase.concat(intrebariCareNuMergPuse)

    if (this.state.arataFinal === 1) {
      console.log("telefoane inappoi", telefoaneInapoi, this.state)
      telefoaneRamase = [...telefoaneInapoi[this.state.i - 2]]
    } else {
      console.log("telefoane inappoi", telefoaneInapoi, this.state)
      telefoaneRamase = [...telefoaneInapoi[this.state.i - 1]]
      intrebariRamase.push(intrebariPuse[this.state.i])
      intrebariPuse.pop()
    }

    console.log("status I INAINTE ", this.state.i)
    //sterg ultima notificare
    notificareIntrebare.pop()
    this.setState({
      notificariIntrebare: [...notificareIntrebare]
    })
    this.setState({
      i: this.state.i - 1,
      arataFinal: 0
    })
    console.log("status I ", this.state.i)
    this.executaFunctii()
  }

  inapoiX(x) {
    let k = this.state.i - x
    intrebariRamase.concat(intrebariCareNuMergPuse)

    for (let n = 0; n < k; n++) {
      telefoaneRamase = [...telefoaneInapoi[this.state.i - 1 - n]]
      intrebariRamase.push(intrebariPuse[this.state.i - n])
      intrebariPuse.pop()
      notificareIntrebare.pop()
    }
    this.setState({
      notificariIntrebare: [...notificareIntrebare]
    })

    this.setState({
      i: this.state.i - k,
      arataFinal: 0
    })
    this.executaFunctii()
  }
}

export default Content
