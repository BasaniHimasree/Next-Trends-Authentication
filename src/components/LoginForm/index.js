import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isShowErrorMsg: false, errorMsg: ''}

  onAddName = event => {
    this.setState({username: event.target.value})
  }

  onAddPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isShowErrorMsg: true, errorMsg})
  }

  onAddUserName = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }
  render() {
    const {username, password, errorMsg, isShowErrorMsg} = this.state
    return (
      <div className="container">
        <div className="image-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login"
          />
        </div>
        <div className="login-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt=" website logo"
            className="website-logo"
          />
          <form className="form" onSubmit={this.onAddUserName}>
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              id="username"
              placeholder="Username"
              type="text"
              onChange={this.onAddName}
              value={username}
              className="input"
            />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              id="password"
              placeholder="Password"
              type="password"
              onChange={this.onAddPassword}
              value={password}
              className="input"
            />
            <p className="paragraph"></p>
            <button type="submit" className="login-button">
              Login
            </button>
            {isShowErrorMsg && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
