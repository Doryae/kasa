import { useState } from "react"
import { Navigate } from "react-router-dom"
import BrowserWidth from "../modules/BrowserWidth"
import HomeBanner from "../modules/HomeBanner"
import Footer from "../modules/Footer"
import Box from "../modules/Box"
import Logements from "../../data/logements.json"

const Home = () => {
  BrowserWidth()

  const boxData = Logements
  const [goToUrl, setGoToUrl] = useState(false)
  const [url, setUrl] = useState("")

  if (goToUrl) {
    return <Navigate to={url} />
  }

  const getLogement = (id) => {
    const findId = boxData.find((el) => el.id === id)

    if (findId.id === id) {
      setGoToUrl(true)
      setUrl("/logement/" + findId.id)
    }
  }

  return (
    <main>
      <div className="page-container p-t-home">
        <HomeBanner />
        <div className="home-container">
          {boxData.map((item) => {
            return (
              <Box
                title={item.title}
                src={item.cover}
                key={item.id}
                id={item.id}
                getId={getLogement}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Home
