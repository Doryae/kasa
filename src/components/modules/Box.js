const Box = (props) => {
  /*
  Utilise les props passées pour récupérer différences informations.
  la src de l'image, et le titre associé à la propriété (logement).

  L'écouteur d'événement "onClick" sur chacune des box permet de récupérer grâce à une fonction (passée en props, et qui prend en paramètre l'id)
  de récupérer l'id de la "box" (qui est un "item" de la BDD).
  */
  return (
    <div
      className="box"
      onClick={() => props.getId(props.id)}>
      <img
        src={props.src}
        alt="Un logement"
      />
      <h3>{props.title}</h3>
    </div>
  )
}

export default Box
