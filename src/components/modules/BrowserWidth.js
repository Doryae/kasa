import { useEffect, useState } from "react"

const getBrowserWidth = () => {
  const { innerWidth: width } = window
  return {
    width
  }
}

export default function BrowserWidth() {
  const [windowWidth, setWindowWidth] = useState(getBrowserWidth())

  useEffect(() => {
    const reziseWindow = () => {
      setWindowWidth(getBrowserWidth())
    }

    window.addEventListener("resize", reziseWindow)
    return () => window.removeEventListener("resize", reziseWindow)
  }, [])

  return windowWidth
}
