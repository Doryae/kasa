import HomeBanner from "../modules/HomeBanner"
import Footer from "../modules/Footer"
import Box from "../modules/Box"

const Home = () => {
  return (
    <main>
      <HomeBanner />
      <div className="home-container">
        <Box />
        <Box />
        <Box />
      </div>
      <Footer />
    </main>
  )
}

export default Home
