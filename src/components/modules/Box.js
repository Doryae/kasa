const Box = (props) => {
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
