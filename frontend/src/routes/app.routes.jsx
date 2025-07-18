import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { User } from "../pages/User"
import { NewMovie } from "../pages/NewMovie"
import { Movie } from "../pages/Movie"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/newmovie" element={<NewMovie />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  )
}