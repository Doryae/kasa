import { useState } from "react"
import BrowserWidth from "../modules/BrowserWidth"
import AboutBanner from "../modules/AboutBanner"
import Collapse from "../modules/Collapse"
import Footer from "../modules/Footer"

const About = () => {
  /*
  Récupère (à chaque modification) la largeur du navigateur.
  Permet d'adapter l'image de la banner (Avec la condition liée à la largeur, la source de l'image change (de mobile à desktop)). 
  */
  BrowserWidth()

  /*
  Défini une constante possédant un objet en state. 
  */
  const [infos] = useState([
    {
      title: "Fiabilité",
      msg: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
      title: "Respect",
      msg: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title: "Service",
      msg: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      title: "Sécurité",
      msg: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ])

  return (
    <main className="about">
      <div className="page-container p-t-about">
        <AboutBanner />
        <div className="about-container">
          {/* ~
          Map le nombre d'objets définis dans la constante Infos. 
          Pour chaque objet, récupère le titre & le message et le transmet en tant que props à l'élément.
          */}
          {infos.map((item, index) => {
            return (
              <Collapse
                title={item.title}
                msg={item.msg}
                key={index}
                id={index}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default About
