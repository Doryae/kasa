import MobileBanner from "../../assets/img/m-home-banner.png"
import DesktopBanner from "../../assets/img/home-banner.png"
import BrowserWidth from "./BrowserWidth"

export default function HomeBanner() {
  return (
    <header
      role="banner"
      className="home-banner">
      <div className="home-banner-container">
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
      <h2>Chez vous, partout et ailleurs</h2>
    </header>
  )
}
