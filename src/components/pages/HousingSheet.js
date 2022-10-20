import { useParams, Navigate } from "react-router-dom"
import Tag from "../modules/Tag"
import { AiFillStar } from "react-icons/ai"
import Collapse from "../modules/Collapse"
import Logements from "../../data/logements.json"
import Footer from "../modules/Footer"
import BrowserWidth from "../modules/BrowserWidth"

export default function HousingSheet() {
  BrowserWidth()

  const params = useParams().id

  const data = Logements.find((el) => el.id === params)

  if (data === undefined) {
    return <Navigate to="/404" />
  }

  const rating = data.rating - 1
  const message = data.equipments

  console.log(data.pictures)

  return (
    <main>
      <div className="page-container p-t-house">
        <div className="carroussel"></div>
        <section>
          <div className="infos">
            <div className="infos-title">
              <h1>{data.title}</h1>
              <p>{data.location}</p>
              <div className="tag-container">
                {data.tags.map((item, index) => {
                  return (
                    <Tag
                      tags={item}
                      key={index}
                    />
                  )
                })}
              </div>
            </div>

            <div className="rating-container">
              <div className="rating">
                {[...Array(5)].map((star, i) => {
                  return (
                    <AiFillStar
                      key={i}
                      size={BrowserWidth().width < 550 ? 15 : 30}
                      color={rating >= i ? "#FF6060" : " #E3E3E3"}
                    />
                  )
                })}
              </div>
              <div className="infos-owner">
                <p>{data.host.name}</p>
                <img
                  src={data.host.picture}
                  alt="Le Propriétaire"
                />
              </div>
            </div>
          </div>
          <div className="infos-collapse">
            <Collapse
              title="Description"
              msg={data.description}
            />
            <Collapse
              title="Équipement"
              msg={message.map((_, i) => {
                return <p key={i}>{message[i]}</p>
              })}
            />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
