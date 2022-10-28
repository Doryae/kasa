import { useParams, Navigate } from "react-router-dom"
import Tag from "../modules/Tag"
import { AiFillStar } from "react-icons/ai"
import SlideShow from "../modules/SlideShow"
import Collapse from "../modules/Collapse"
import Logements from "../../data/logements.json"
import Footer from "../modules/Footer"
import BrowserWidth from "../modules/BrowserWidth"

export default function HousingSheet() {
  /*
  Récupère (à chaque modification) la largeur du navigateur.
  Permet d'adapter l'image de la banner (Avec la condition liée à la largeur, la source de l'image change (de mobile à desktop)). 
  */
  BrowserWidth()

  /*
  Utilise le hook useParams pour récupérer l'id transmit à l'url (voir la page Home : fonction getLogement())
  Ensuite, vérifie dans la BDD (le fichier .json dans ce cas précis) si un élément possède exactement l'id passé dans l'url. 
  Si l'id passé dans l'url ne correspond à aucun élément, renvoit l'utilisateur sur une page d'erreur.
  */
  const params = useParams().id
  const data = Logements.find((el) => el.id === params)

  if (data === undefined) {
    return <Navigate to="/404" />
  }

  /*
  La constante rating récupère le score du logement.
  On diminue cette valeur de 1 pour correspondre à l'index d'un array. (un array commence à l'index 0.)
  */
  const rating = data.rating - 1
  /*
  On stocke l'array des équipements dans une constante qui servira à être passée comme props.
  */
  const message = data.equipments

  /*
  La constante renverra un Booléen(true or false). Passée en props, elle permettra de vérifier si le nombre d'image dans le carousel est supérieure à 1.
  */
  const notOnePicture = data.pictures.length > 1

  return (
    <main>
      <div className="page-container p-t-house">
        <div className="slide-show-container">
          <SlideShow notOnePicture={notOnePicture} />
        </div>
        <section>
          <div className="infos">
            <div className="infos-title">
              <h1>{data.title}</h1>
              <p>{data.location}</p>
              <div className="tag-container">
                {data.tags.map((item, index) => {
                  return (
                    <Tag
                      tags={item}
                      key={index}
                    />
                  )
                })}
              </div>
            </div>

            <div className="rating-container">
              <div className="rating">
                {/* 
                Créer un array de 5 items (index = 0,1,2,3,4) vide. On a besoin de 5 étoiles : Utilisation de l'array pour utiliser la fonction map.
                Récupère la const rating qui équivaut désormais à l'index de l'array. (0 à 4).
                Si la note (rating) est supérieure ou égale à l'index (de l'étoile) elle sera colorée, sinon elle sera grisée.
                */}
                {[...Array(5)].map((star, i) => {
                  return (
                    <AiFillStar
                      key={i}
                      size={BrowserWidth().width < 550 ? 15 : 30}
                      color={rating >= i ? "#FF6060" : " #E3E3E3"}
                    />
                  )
                })}
              </div>
              <div className="infos-owner">
                <p>{data.host.name}</p>
                <img
                  src={data.host.picture}
                  alt="Le Propriétaire"
                />
              </div>
            </div>
          </div>
          <div className="infos-collapse">
            <Collapse
              title="Description"
              msg={data.description}
            />
            {/* 
            Utilise l'array de la const message pour mapper les équipements de l'appartement.
            Chaque élément possédera son propres paragraphe, ce qui permet de faire un saut de ligne entre chaque équipement. 
            Permet de correspondre au style de la maquette Figma.
            */}
            <Collapse
              title="Équipement"
              msg={message.map((_, i) => {
                return <p key={i}>{message[i]}</p>
              })}
            />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
