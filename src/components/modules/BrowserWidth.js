import { useEffect, useState } from "react"

const getBrowserWidth = () => {
  const { innerWidth: width } = window
  return {
    width
  }
}

export default function BrowserWidth() {
  /*
  Utilise la fonction getBrowserWidth() pour modifier le state de WindowWidth à la width "exacte" du navigateur
  */
  const [windowWidth, setWindowWidth] = useState(getBrowserWidth())

  /*
  Si la taille du navigateur vient à être modifiée, l'écouteur d'événement "resize" est enclenché : appel de la fonction reziseWindow
  Il va rappeler la fonction getBrowserWidth() à chaque modification de la taille du navigateur pour modifier le state de windowWidth.
  Lorsque la modification de la taille du navigateur est terminée, l'écouteur d'événement est supprimé. (pas la valeur de windowWidth)
  Enfin, il renvoit la valeur de windowWith.
  Cette valeur va permettre de modifier l'image utilisée sur les différentes banner (Passer d'une image mobile à une image desktop).
  */
  useEffect(() => {
    const reziseWindow = () => {
      setWindowWidth(getBrowserWidth())
    }

    window.addEventListener("resize", reziseWindow)
    return () => window.removeEventListener("resize", reziseWindow)
  }, [])

  return windowWidth
}
