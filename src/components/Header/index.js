import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="nxtwave-logo"
        />
      </div>
      <div className="components-card">
        <ul className="list-items">
          <Link to="/">
            <li className="item">Home</li>
          </Link>
          <Link to="/products">
            <li className="item">Products</li>
          </Link>
          <Link to="/cart">
            <li className="item">Cart</li>
          </Link>
        </ul>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  )
}

export default Header
