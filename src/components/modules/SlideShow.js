import { useState } from "react"
import { useParams } from "react-router-dom"
import Logements from "../../data/logements.json"

const SlideShow = (props) => {
  /*
  Hook permettant de récupérer à chaque moment l'index sur lequel nous nous trouvons.
  Permet d'afficher l'image en rapport au currentIndex
  */
  const [currentIndex, setCurrentIndex] = useState(0)

  /*
  Récupération du paramètre id de l'url + isoler l'élément de la BDD (via son id) pour ne travailler que sur ce dernier.
  Récupération des images sur l'élément en question.
  */
  const params = useParams().id
  const data = Logements.find((el) => el.id === params)
  const pictures = data.pictures

  /*
  Vérification :
  - Previous : Si le currentIndex est à 0 (première image de l'array), si on clique sur la flèche "left"(previous), on récupère le dernier élément du tableau comme nouvel index.
  Sinon, décrémente le currentIndex de - 1
  Next : Si le currentIndex est équivalent à la dernière image de l'array, si on clique sur la flèche "right"(next), on modifie le currentIndex à 0 (premier index).
  Sinon, incrémente le currentIndex de + 1
*/
  const previousPicture = () => {
    currentIndex === 0
      ? setCurrentIndex(pictures.length - 1)
      : setCurrentIndex(currentIndex - 1)
  }

  const nextPicture = () => {
    currentIndex === pictures.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className="slide-show">
      {/*
      Opérateur ternaire permettant de définir (via les informations récupérées dans les props) si le carousel contient plusieurs images ou une seule.
      Si plusieurs => Affiche une flèche de chaque coté de l'image indiquant qu'on puisse naviguer d'une image à l'autre.
      Si une seule => Aucun affichage des flèches.
      */}
      {props.notOnePicture ? (
        <div onClick={previousPicture}>
          <span className="left"></span>
        </div>
      ) : null}
      {props.notOnePicture ? (
        <div onClick={nextPicture}>
          <span className="right"></span>
        </div>
      ) : null}
      <img
        src={pictures[currentIndex]}
        alt=""
        className=""
      />
    </div>
  )
}

export default SlideShow
