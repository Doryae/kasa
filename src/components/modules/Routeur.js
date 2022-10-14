import React from "react"
import { Routes, Route } from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import HousingSheet from "../pages/HousingSheet"
import NotFound from "../pages/NotFound"

const Routeur = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<HousingSheet />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default Routeur
