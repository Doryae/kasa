export default function Tag(props) {
  /*
  Récupère la props passée afin de créer le "nom" du tag.
  */
  return <div className="tag">{props.tags}</div>
}
