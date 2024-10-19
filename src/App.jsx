import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Components/Login/LoginForm"
import WindowChat from "./Components/Chats/WindowChat"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/chats" element={<WindowChat />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
