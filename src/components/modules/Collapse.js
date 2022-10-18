import { useState } from "react"

export default function Collapse(props) {
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
