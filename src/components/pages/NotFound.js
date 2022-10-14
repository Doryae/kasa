import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container-404 c-main">
      <div>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <Link className="c-main" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default NotFound
