class Intrebari {
  constructor(text, raspunsuriText, raspunsuri) {
    this.text = text
    this.raspunsuriText = raspunsuriText
    this.raspunsuri = raspunsuri
  }
  getText = () => this.text

  getRaspunsuriText = val => this.raspunsuriText[val]

  getRaspunsuri = val => this.raspunsuri[val]
}

export default Intrebari
