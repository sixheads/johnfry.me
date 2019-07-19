import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <nav className="site-nav" role="navigation">
    <ul>
      <li>
        <Link to="/">Work</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Nav
