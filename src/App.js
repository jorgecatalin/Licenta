import React from "react"
import "./index.css"
import Content from "./Componente/Content.js"
import Incepe from "./Componente/Incepe.js"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleSw = this.handleSw.bind(this)
    this.state = {
      sw: 1
    }
  }
  render() {
    if (this.state.sw) {
      return (
        <div className="Container">
          <Incepe action={this.handleSw} />
        </div>
      )
    } else {
      return (
        <div className="Container">
          <Content />
        </div>
      )
    }
  }
  handleSw() {
    console.log("ceva")
    if (this.state.sw)
      this.setState({
        sw: 0
      })
    else
      this.setState({
        sw: 1
      })
  }
}

export default App
