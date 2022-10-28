import { useState } from "react"

export default function Collapse(props) {
  /*
  Récupère les props passées.
  Ajout d'un toggle (défini sur false). Au clique du span (une sorte de vecteur créeant une flèche down), le state change sur son inverse =>
  De false à true, et de true à false selon le state actuel du toggle.
  Cela permet de créer une condition simple : 
  -Si toggle à une valeur de false, seule une partie du composant sera affichée, avec une flèche clickable dirigée vers le bas.
  -Si toggle à une valeur de true, la partie "article" apparait (avec le message dédié à cette partie) & la flèche clickable est dirigée vers le haut.
  */
  const [toggle, SetToggle] = useState(false)

  const displayInfo = () => {
    SetToggle(!toggle)
  }

  return (
    <section>
      <header className="collapse">
        <h2>{props.title}</h2>
        <div onClick={displayInfo}>
          <span className={toggle ? "up" : "down"}></span>
        </div>
      </header>
      <article className={toggle ? "panel-collapse" : "panel-collapse close"}>
        <div className="panel-info">{props.msg}</div>
      </article>
    </section>
  )
}
