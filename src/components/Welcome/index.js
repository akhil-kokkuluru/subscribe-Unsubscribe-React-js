import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {name: 'Subscribe'}

  nameChange = () => {
    const {name} = this.state
    if (name === 'Subscribe') {
      this.setState(prevValue => ({name: 'Subscribed'}))
    } else {
      this.setState(prevValue => ({name: 'Subscribe'}))
    }
  }

  render() {
    const {name} = this.state
    return (
      <div className="contentContainer">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thankyou! Happy Learning</p>
        <button type="button" className="buttons" onClick={this.nameChange}>
          {name}
        </button>
      </div>
    )
  }
}

export default Welcome
