import PageLayout from "./layouts/PageLayout"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Event from "./pages/Event";
import Register from "./pages/Register";
import CreateEvent from "./pages/CreateEvent";
import PageNotFound from "./pages/404"
import Dashboard from "./layouts/Dashboard";
import Profile from "./pages/Profile"
import Events from "./pages/Events"
import Notification from "./pages/Notifications"
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
            <Route path="/event/create" element={<CreateEvent />} />
            <Route path="*" element={<PageNotFound/>}/>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="/dashboard/profile" element={<Profile/>}/>
            <Route path="/dashboard/events" element={<Events/>}/>
            <Route path="/dashboard/notifications" element={<Notification/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
