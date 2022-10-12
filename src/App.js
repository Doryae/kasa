import "./style/style.css"
import { Routes, Route, Link } from "react-router-dom"
import NotFound from "./components/pages/NotFound"
import Logo from "./assets/img/logo.png"

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={Logo} alt="Logo de Kasa" />
          <div>
            <Link className="c-main" to="/">
              Accueil
            </Link>

            <Link className="c-main" to="/404">
              A Propos
            </Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
