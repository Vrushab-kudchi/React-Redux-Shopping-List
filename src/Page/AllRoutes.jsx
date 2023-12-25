import { Route, Routes } from "react-router-dom"
import Shop from "./Shop"
import Cart from "./Cart"

export default function AllRoutes() {
  return (

      <Routes>
          <Route path="/" element={<Shop />} /> 
          <Route path="/cart" element={<Cart />} /> 
      </Routes>

  )
}
