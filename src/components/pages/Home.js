import { useState } from "react"
import { Navigate } from "react-router-dom"
import BrowserWidth from "../modules/BrowserWidth"
import HomeBanner from "../modules/HomeBanner"
import Footer from "../modules/Footer"
import Box from "../modules/Box"
import Logements from "../../data/logements.json"

const Home = () => {
  /*
  Récupère (à chaque modification) la largeur du navigateur.
  Permet d'adapter l'image de la banner (Avec la condition liée à la largeur, la source de l'image change (de mobile à desktop)). 
  */
  BrowserWidth()

  /* 
  Je pars du principe qu'un fetch sera fait (ou un get via Axios) lorsque le backend sera disponible.
  La constante contiendra les éléments récupérés.
  */
  const boxData = Logements

  /*
  Déclaration de deux hooks useState.
  Si le useState de goToUrl passe à true, la condition renverra le lien [racine]/logement/id, et forcera la navigation à cette page.
  */
  const [goToUrl, setGoToUrl] = useState(false)
  const [url, setUrl] = useState("")

  if (goToUrl) {
    return <Navigate to={url} />
  }

  /*
  Récupère l'id de l'élément boxData sur lequel l'utilisateur clique, et renvois cet id comme state à url.
  + passe le state de goToUrl à true afin de remplir la condition ci-dessus, forçant la navigation sur l'url indiqué. 
  Renvois sur la page de l'appartement cliqué. 
  */
  const getLogement = (id) => {
    const findId = boxData.find((el) => el.id === id)

    if (findId.id === id) {
      setGoToUrl(true)
      setUrl("/logement/" + findId.id)
    }
  }

  return (
    <main>
      <div className="page-container p-t-home">
        <HomeBanner />
        <div className="home-container">
          {/* ~
          Map le nombre d'objets récupéré dans la BDD (le fichier .json dans ce cas précis). 
          Pour chaque objet, récupère différentes informations et les transmets en tant que props à l'élément.
          */}
          {boxData.map((item) => {
            return (
              <Box
                title={item.title}
                src={item.cover}
                key={item.id}
                id={item.id}
                getId={getLogement}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Home
