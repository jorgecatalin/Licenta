import React from "react"
import Content from "./Componente/Content.js"
import Incepe from "./Componente/Incepe.js"
import {
  Spring,
  useSpring,
  animated,
  Transition
} from "react-spring/renderprops"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleSw = this.handleSw.bind(this)
    this.resetTransition = this.resetTransition.bind(this)
    this.state = {
      sw: 1,
      resetT: false
    }
  }
  render() {
    return (
      <div>
        {this.state.sw ? <Incepe action={this.handleSw} /> : <Content />}
      </div>
    )
  }
  resetTransition() {
    console.log("ceva")
    this.setState({
      resetT: true
    })
  }
  handleSw() {
    console.log("handleSw")
    if (this.state.sw)
      this.setState({
        sw: 0
      })
    else
      this.setState({
        sw: 1
      })
    this.resetTransition()
  }
}

export default App
