import { useState } from "react"
import { useParams } from "react-router-dom"
import Logements from "../../data/logements.json"

const SlideShow = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const params = useParams().id
  const data = Logements.find((el) => el.id === params)
  const pictures = data.pictures

  const previousPicture = () => {
    currentIndex === 0
      ? setCurrentIndex(pictures.length - 1)
      : setCurrentIndex(currentIndex - 1)
  }

  const nextPicture = () => {
    currentIndex === pictures.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1)
  }

  return (
    <div className="slide-show">
      {props.notOnePicture ? (
        <div onClick={previousPicture}>
          <span className="left"></span>
        </div>
      ) : null}
      {props.notOnePicture ? (
        <div onClick={nextPicture}>
          <span className="right"></span>
        </div>
      ) : null}
      <img
        src={pictures[currentIndex]}
        alt=""
      />
    </div>
  )
}

export default SlideShow
