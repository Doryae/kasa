import MobileBanner from "../../assets/img/m-about-banner.png"
import DesktopBanner from "../../assets/img/about-banner.png"
import BrowserWidth from "./BrowserWidth"

export default function AboutBanner() {
  return (
    <header
      role="banner"
      className="about-banner">
      <div className="about-banner-container">
        {/*
        Appelle la fonction BrowerWidth(), si la width du navigateur est inférieure à 550px alors :
        -> Bannière version Mobile. 
        Sinon :
        -> Bannière version Desktop.
        */}
        {BrowserWidth().width < 550 ? (
          <img
            src={MobileBanner}
            alt="Paysage Montagneux au bord de l'océan"
          />
        ) : (
          <img
            src={DesktopBanner}
            alt="Paysage Montagneux au bord de l'océan"
          />
        )}
      </div>
    </header>
  )
}
