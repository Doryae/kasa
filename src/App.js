import "./style/style.css"
import Header from "./components/modules/Header"
import Routeur from "./components/modules/Routeur"

function App() {
  /*
  Le Footer n'est pas ajouté en dessous du Routeur car :
  Le Footer n'est pas utilisé sur l'intégralité des pages du site. A l'inverse du Header.
  */

  return (
    <div className="App">
      <Header />
      <Routeur />
    </div>
  )
}

export default App
