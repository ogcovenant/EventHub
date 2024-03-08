import PageLayout from "./layouts/PageLayout"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/global.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/register" element={<Register />} />
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
