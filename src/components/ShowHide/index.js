// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    ShowFirstName: true,
    ShowLastName: true,
  }

  onClickShowFirstName = () => {
    this.setState(prevState => ({ShowFirstName: !prevState.ShowFirstName}))
  }

  onClickShowLastname = () => {
    this.setState(prevState => ({ShowLastName: !prevState.ShowLastName}))
  }

  render() {
    const {ShowFirstName, ShowLastName} = this.state

    return (
      <div className="app-container">
        <h1>Show/Hide </h1>
        <div className="Show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickShowFirstName}
            >
              Show/Hide FirstName
            </button>

            {ShowFirstName && <p className="name">Joe</p>}
          </div>

          <div className="name-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickShowLastname}
            >
              Show/Hide LastName
            </button>

            {ShowLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
