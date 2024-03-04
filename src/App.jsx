import PageLayout from "./layouts/PageLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/global.css";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
