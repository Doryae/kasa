import React from "react"
import { Routes, Route } from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import HousingSheet from "../pages/HousingSheet"
import NotFound from "../pages/NotFound"

const Routeur = () => {
  return (
    <Routes>
      <Route
        path="kasa/"
        element={<Home />}
      />
      <Route
        path="kasa/about"
        element={<About />}
      />
      <Route
        path="kasa/logement/:id"
        element={<HousingSheet />}
      />
      <Route
        path="kasa/404"
        element={<NotFound />}
      />
      <Route
        path="kasa/*"
        element={<NotFound />}
      />
    </Routes>
  )
}

export default Routeur
