import Navbar from "./components/Navbar"
import AuthLayout from "./components/layouts/AuthLayout";

import { Route, Routes } from "react-router-dom"
import { Aboutroute, Contactroute, Mainroute } from "./routes/(auth)"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/" element={<Mainroute/>}/>
          <Route path="/about" element={<Aboutroute/>}/>
          <Route path="/contact" element={<Contactroute/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App