class Intrebari {
  constructor(text, raspunsuriText, raspunsuri, categorie) {
    this.text = text
    this.raspunsuriText = raspunsuriText
    this.raspunsuri = raspunsuri
    this.categorie = categorie
  }
  getText = () => this.text

  getCategorie = () => this.categorie

  getRaspunsuriText = val => this.raspunsuriText[val]

  getRaspunsuri = val => this.raspunsuri[val]
}

export default Intrebari
