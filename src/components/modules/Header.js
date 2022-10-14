import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/img/logo.png"

const Header = () => {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Logo de Kasa" />

        <div>
          <Link className="c-main" to="/">
            Accueil
          </Link>

          <Link className="c-main" to="/about">
            A Propos
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
