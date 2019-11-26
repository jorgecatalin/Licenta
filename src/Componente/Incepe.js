import React from "react"
import { Spring, useSpring, animated } from "react-spring/renderprops"

class Incepe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -50 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <animated.div style={props} className="Incepe">
            <div onClick={this.props.action}>Incepe</div>
          </animated.div>
        )}
      </Spring>
    )
  }
}

export default Incepe
